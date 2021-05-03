<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-3">
            <div class="container">
                <router-link :to="{ name:'HomePage' }" class="navbar-brand mb-0 h1">{{ pageTitle }}</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name:'HomePage' }" class="nav-link">Hjem</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name:'BookingPage' }" class="nav-link">Oppdrag</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name:'ArtistPage' }" class="nav-link">Artister</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <router-link :to="{ name:'AddBookingPage' }" class="btn btn-outline-light m-2">Legg til et oppdrag</router-link>
                    <router-link :to="{ name:'AddArtistPage' }" class="btn btn-outline-light m-2">Registrer en artist</router-link>
                    <router-link :to="{ name:'AdminPage' }" class="btn btn-outline-light m-2">Administrator</router-link>
                </form>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import collapse from 'bootstrap/js/dist/collapse'

export default {
    name: 'TheHeader',
    props: {
        pageTitle: String
    },
    use: {
        collapse
    }
}

</script>