<template>
    <div>
        <page-hero title="Artister" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>
        <div class="container py-5">
            <artist-list></artist-list>
            <artist-modal></artist-modal>
        </div>
        <div class="container pb-5">
            <h2 class="pb-4">Siste anmeldelser av artister</h2>
            <review-list></review-list>
        </div>
    </div>
</template>

<script>
import ArtistList from '../components/artists/ArtistList'
import ReviewList from '../components/reviews/ReviewList'
import PageHero from '../components/shared/PageHero'
import ArtistModal from '../components/artists/ArtistModal'

export default {
    name: 'ArtistPage',
    components: {
        ArtistList,
        ReviewList,
        PageHero,
        ArtistModal
    }
}
</script>