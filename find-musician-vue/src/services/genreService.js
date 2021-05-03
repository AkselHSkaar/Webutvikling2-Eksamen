import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function genreService() {

    const genre = reactive({ genreList: [] });

    const getGenres = () => {
        return axios("https://localhost:5001/genre")
            .then( response => {
                genre.genreList = response.data;
            } )
    }

    return {
        ...toRefs(genre),
        getGenres
    }
}