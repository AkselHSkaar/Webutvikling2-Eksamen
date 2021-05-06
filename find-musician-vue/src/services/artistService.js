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
        //Return is needed to wait for response before soring artistList
        return axios(`https://localhost:5001/artist/Search/${input}`)
                .then( response => {
                    artists.searchResult = response.data;
                } );
    }

    //Post method for adding new artist with image.
    const createNewArtist = ( postArtist, imageObject ) => {
        //Adding the text fileds to the database
        axios.post("https://localhost:5001/artist/", postArtist)
            .then( response => {

                //Sending the image to images in wwwroot via uploadImage function in artistController  
                axios({
                    method: "POST",
                    url: "https://localhost:5001/artist/UploadImage",
                    data: imageObject,
                    config: { headers: {"Content-type" : "multipart/form-data"} }
                })

                //Pushing new artist to artistList
                artists.artistList.push( response.data );
            } );
    }

    //Updating an existing artist. This function is only used when the user also wats to update the image
    const putArtist = ( artistToEdit, imageObject ) => {
        axios.put("https://localhost:5001/artist/", artistToEdit)
            .then( () => {
                axios({
                    method: "POST",
                    url: "https://localhost:5001/artist/UploadImage",
                    data: imageObject,
                    config: { headers: {"Content-type" : "multipart/form-data"} }
                })
            })
    }
    
    // Updating an existing artist. This function is used when the user wats to update text, but not image
    const putArtistNoImage = ( artistToEdit ) => {
        axios.put("https://localhost:5001/artist/", artistToEdit)
    }

    //This function is for updating an artist with new rating
    const putArtistRating = ( artistToEdit ) => {
        return axios.put("https://localhost:5001/artist/", artistToEdit)
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
        putArtistRating,
        putArtistNoImage,
        deleteArtist
    }
}