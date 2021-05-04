import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function newsletterService() {

    const newsletter = reactive({ newsletterList: [] });

    const getNewsletter = () => {
        axios("https://localhost:5001/newsletter")
            .then( response => {
                newsletter.newsletterList = response.data;
            } )
    }

    const createNew = ( postEmail ) => {
        axios.post("https://localhost:5001/newsletter", postEmail)
            .then( response => {
                newsletter.newsletterList.push(response.data);
            } )
    }

    return {
        ...toRefs(newsletter),
        getNewsletter,
        createNew
    }
}