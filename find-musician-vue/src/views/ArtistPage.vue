<template>
    <div>
        <page-hero 
            title="Artister" 
            description="Her finner du en oversikt over artistene i vår database." 
            image="artist-hero-bg.jpg">
        </page-hero>
        <div class="container py-5">
            <artist-list></artist-list>
        </div>
        <div class="container pb-5">
            <div class="mb-5">
                <h2 class="pb-4">Siste anmeldelser av artister</h2>
                <review-list></review-list>
            </div>
            
            <h2 class="pb-2">Anmeld en artist</h2>
            <review-create></review-create>
        </div>
    </div>
</template>

<script>
import ArtistList from '../components/artists/ArtistList'
import ReviewList from '../components/reviews/ReviewList'
import PageHero from '../components/shared/PageHero'
import ReviewCreate from '../components/reviews/ReviewCreate'

export default {
    name: 'ArtistPage',
    components: {
        ArtistList,
        ReviewList,
        PageHero,
        ReviewCreate
    }
}
</script>