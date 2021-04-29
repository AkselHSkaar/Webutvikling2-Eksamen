import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function artistService() {

    const artists = reactive({ artistList: [], artistById: "", artistByName: "", searchResult: [] });

    const getArtists = () =>{
        axios("https://localhost:5001/artist")
            .then( response => {
                artists.artistList = response.data;
            } )
    }

    const getArtistById = ( id ) => {
        axios(`https://localhost:5001/artist/${id}`)
            .then( response => {
                artists.artistById = response.data;
            } );
    }

    const getArtistByName = ( name ) => {
        axios(`https://localhost:5001/artist/getArtistByName/${name}`)
            .then( response => {
                artists.artistByName = response.data;
            } );
    }

    const searchForArtist = ( input ) => {
        //Return is needed to wait for response before soring artistList
        return axios(`https://localhost:5001/artist/Search/${input}`)
                .then( response => {
                    artists.searchResult = response.data;
                } );
    }

    //Post metode for å legge til ny artist med bilde.
    const createNewArtist = ( postArtist, imageObject ) => {
        //Legger til tekstfeltene i database
        axios.post("https://localhost:5001/artist/", postArtist)
            .then( response => {

                //Sender inn bilde til images i wwwroot via uploadImage funksjon i artistController  
                axios({
                    method: "POST",
                    url: "https://localhost:5001/artist/UploadImage",
                    data: imageObject,
                    config: { headers: {"Content-type" : "multipart/form-data"} }
                })

                //Pusher ny artist inn i artistList
                artists.artistList.push( response.data );
            } )
    }

    const putArtist = ( artistToEdit ) => {
        axios.put("https://localhost:5001/artist/", artistToEdit)
    }


    const deleteArtist = ( id ) => {
        axios.delete(`https://localhost:5001/artist/${id}`)
    }

    return {
        ...toRefs( artists ),
        getArtists,
        getArtistById,
        getArtistByName,
        searchForArtist,
        createNewArtist,
        putArtist,
        deleteArtist
    }
}