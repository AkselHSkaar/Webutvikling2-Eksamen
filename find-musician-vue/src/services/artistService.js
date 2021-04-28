import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function artistService() {

    const artists = reactive({ artistList: [], artistById: "" });

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
    

    const createNewArtist = ( postArtist, imageObject ) => {
        axios.post("https://localhost:5001/artist/", postArtist)
            .then( response => {

                axios({
                    method: "POST",
                    url: "https://localhost:5001/artist/UploadImage",
                    data: imageObject,
                    config: { headers: {"Content-type" : "multipart/form-data"} }
                })

                artists.artistList.push( response.data );
            } )
    }

    return {
        ...toRefs( artists ),
        getArtists,
        getArtistById,
        createNewArtist
    }
}