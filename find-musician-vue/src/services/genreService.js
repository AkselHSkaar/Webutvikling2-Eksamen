import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function genreService() {

    const genre = reactive({ genreList: [], genreByName: {} });

    const getGenres = () => {
        return axios("https://localhost:5001/genre")
            .then( response => {
                genre.genreList = response.data;
            } )
    }

    const getGenreByName = (genreName) => {
        return axios(`https://localhost:5001/genre/getbyname/${genreName}`)
            .then( response => {
                genre.genreByName = response.data;
            } )
    }

    return {
        ...toRefs(genre),
        getGenres,
        getGenreByName
    }
}