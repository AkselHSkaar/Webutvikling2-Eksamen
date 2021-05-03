<template>
    <footer>
        <div class="container pt-4 my-md-5 pt-md-5 border-top">
            <div class="row gy-2">
                <div class="row col-12 col-lg-6">
                    <a class="col-12 navbar-brand h1 mb-0" href="#">FindAMusician</a>
                    <p class="col-12 col-lg-10">Quickly design and customize responsive mobile-first sites with
                        Bootstrap, the world’s most popular front-end open source toolkit</p>
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
                            <li class="mb-1">
                                <a class="link-secondary text-decoration-none" href="#">Anmeldelser</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <h5>Nyhetsbrev</h5>
                    <ul class="list-unstyled text-small">
                        <p>Meld deg på nyhetsbrevet og motta varsler om nye oppdrag og artister på mail!</p>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">E-post</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp">
                            </div>
                            <button type="submit" class="btn btn-primary">Meld meg på!</button>
                        </form>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-primary text-white text-center text-lg-start">
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2021 Copyright:
                <a class="text-white text-decoration-none" href="https://mdbootstrap.com/">HireAMusician.com</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>