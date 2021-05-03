<template>
    <div>
        <page-hero title="Administrator" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>
        <div>
            <h1>Administrer artister</h1>
            <router-link :to="{ name:'AdminArtistPage' }">
                Artister
            </router-link>
        </div>
        <div>
            <h1>Administrer oppdrag</h1>
            <router-link :to="{ name:'AdminBookingPage' }">
                Oppdrag
            </router-link>
        </div>
        <div>
            <h1>Administrer omtaler</h1>
            <router-link :to="{ name:'AdminReviewsPage' }">
                Omtaler
            </router-link>
        </div>
    </div>
</template>

<script>
import PageHero from '../components/shared/PageHero'

export default {
    name: 'AdminPage',
    components: {
        PageHero
    }
}
</script>