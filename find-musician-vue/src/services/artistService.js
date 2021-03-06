import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function artistService() {

    const artists = reactive({ artistList: [], artistById: {}, artistByName: {}, searchResult: [] });

    const getArtists = () =>{
        return axios("https://localhost:5001/artist")
            .then( response => {
                artists.artistList = response.data;
            } );
    }

    const getArtistById = ( id ) => {
        axios(`https://localhost:5001/artist/${id}`)
            .then( response => {
                artists.artistById = response.data;
            } );
    }

    const getArtistByName = ( name ) => {
        return axios(`https://localhost:5001/artist/getbyname/${name}`)
            .then( response => {
                artists.artistByName = response.data;
            } );
    }

    const searchForArtist = ( input ) => {
        return axios(`https://localhost:5001/artist/Search/${input}`)
                .then( response => {
                    artists.searchResult = response.data;
                } );
    }

    const createNewArtist = ( postArtist, imageObject ) => {
        //Adding the text filds to the database
        return axios.post("https://localhost:5001/artist/", postArtist)
            .then(async response => {
                //Sending the image to /images in wwwroot via uploadImage function in artistController
                await axios({
                    method: "POST",
                    url: "https://localhost:5001/artist/UploadImage",
                    data: imageObject,
                    config: { headers: {"Content-type" : "multipart/form-data"} }
                })
                artists.artistList.push( response.data );
            } );
    }

    //Create new artist without an image
    const createNewArtistNoImage = ( postArtist ) => {
        return axios.post("https://localhost:5001/artist/", postArtist)
            .then( response => {
                artists.artistList.push( response.data );
            } );
    }

    //Updating artist with new image and text
    const putArtist = ( artistToEdit, imageObject ) => {
        return axios.put("https://localhost:5001/artist/", artistToEdit)
            .then(async () => {
                await axios({
                    method: "POST",
                    url: "https://localhost:5001/artist/UploadImage",
                    data: imageObject,
                    config: { headers: {"Content-type" : "multipart/form-data"} }
                })
            })
    }
    
    //Updating artist without changing the image
    const putArtistNoImage = ( artistToEdit ) => {
        return axios.put("https://localhost:5001/artist/", artistToEdit)
    }

    //Update artist rating
    const putArtistRating = ( artistToEdit ) => {
        return axios.put("https://localhost:5001/artist/", artistToEdit)
    }

    const deleteArtist = ( id ) => {
        return axios.delete(`https://localhost:5001/artist/${id}`)
    }

    return {
        ...toRefs( artists ),
        getArtists,
        getArtistById,
        getArtistByName,
        searchForArtist,
        createNewArtist,
        createNewArtistNoImage,
        putArtist,
        putArtistRating,
        putArtistNoImage,
        deleteArtist
    }
}