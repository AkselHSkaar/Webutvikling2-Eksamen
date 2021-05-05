import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function newsletterService() {

    const newsletter = reactive({ emailList: [], emailById: {} });

    const getEmail = () => {
        axios("https://localhost:5001/newsletter")
            .then( response => {
                newsletter.emailList = response.data;
            } )
    }

    const getEmailById = ( id ) => {
        axios(`https://localhost:5001/newsletter/${id}`)
            .then( response => {
                newsletter.emailById = response.data;
            } )
    }

    const createNew = ( postEmail ) => {
        axios.post("https://localhost:5001/newsletter/", postEmail)
            .then( response => {
                newsletter.newsletterList.push(response.data);
            } )
    }

    const putEmail = ( emailToEdit ) => {
        axios.put("https://localhost:5001/newsletter/", emailToEdit)
    }

    const deleteEmail = ( id ) => {
        axios.delete(`https://localhost:5001/newsletter/${id}`)
    }

    return {
        ...toRefs(newsletter),
        getEmail,
        getEmailById,
        createNew,
        putEmail,
        deleteEmail
    }
}