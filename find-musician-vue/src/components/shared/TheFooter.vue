<template>
    <footer>
        <div class="container pt-4 my-md-5 pt-md-5 border-top">
            <div class="row gy-2">
                <div class="row col-12 col-lg-6">
                    <a class="col-12 navbar-brand h1 mb-0" href="#">FindAMusician</a>
                    <p class="col-12 col-lg-10">FindAMusician leverer høykvalitets musikalsk underholdning til ditt arrangement. Ingen oppdrag er for små eller for store!</p>
                </div>
                <div class="gy-2 col-12 col-md-6 col-lg-3">
                    <div class="col-12 col-sm-6 col-lg-12">
                        <h5>Oppdrag</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1">
                                <router-link :to="{ name:'AddBookingPage' }" class="link-secondary text-decoration-none">Legg til et oppdrag</router-link>
                            </li>
                            <li class="mb-1">
                                <router-link :to="{ name:'BookingPage' }" class="link-secondary text-decoration-none">Alle oppdrag</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-12">
                        <h5>Artister</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1">
                                <router-link :to="{ name:'ArtistPage' }" class="link-secondary text-decoration-none">Alle artister</router-link>
                            </li>
                            <li class="mb-1">
                                <router-link :to="{ name:'AddArtistPage' }" class="link-secondary text-decoration-none">Registrer en artist</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <h5>Nyhetsbrev</h5>
                    <ul class="list-unstyled text-small">
                        <p>Meld deg på nyhetsbrevet og motta varsler om nye oppdrag og artister på mail!</p>
                        <form :onsubmit="handleForm">
                            <div class="mb-3">
                                <label for="footerEmailInput" class="form-label">E-post</label>
                                <input v-model="email" @blur="inputChange" type="email" class="form-control" id="footerEmailInput" aria-describedby="emailHelp" required>
                            </div>
                            <button @click="submitCheck" type="button" class="btn mt-2" :class="missingFields ? 'btn-secondary' : 'btn-success'">Meld meg på!</button>
                            <p v-show="signupSuccess" class="mt-3">Du har blitt meldt på nyhetsbrevet!</p>
                        </form>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-primary text-white text-center text-lg-start">
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2021 Copyright:
                <a class="text-white text-decoration-none" href="https://mdbootstrap.com/">FindAMusician.com</a>
            </div>
        </div>
    </footer>
</template>

<script>
import newsletterService from '../../services/newsletterService'
import { ref, reactive, toRefs } from 'vue'

export default {
    name: 'TheFooter',
    setup(){

        const { createNew } = newsletterService();
        const newEmail = reactive({ email: "" });
        const handleForm = (event) => { event.preventDefault(); } 
        const signupSuccess = ref(false);

        const addEmailToNewsletter = () => {
                createNew(newEmail).then(() => {
                    newEmail.email = "";
                    missingFields.value = true;
                    signupSuccess.value = true;
                    setTimeout(() => { signupSuccess.value = false; }, 3000);
                });
        }

        const missingFields = ref(true);

        const inputChange = () => {
            if (newEmail.email != "") {
                missingFields.value = false;
            } else {
                missingFields.value = true;
            }
        }

        const submitCheck = () => {
            if (!missingFields.value) {
                addEmailToNewsletter();
            }
        } 

        return {
            ...toRefs(newEmail),
            addEmailToNewsletter,
            inputChange,
            submitCheck,
            missingFields,
            handleForm,
            signupSuccess
        }

    }
}
</script>