<template>
    <div>
        <page-hero title="Artister" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>
        <div class="container py-5">
            <artist-list></artist-list>
            <artist-modal></artist-modal>
        </div>
    </div>
</template>

<script>
import ArtistList from '../components/artists/ArtistList'
import PageHero from '../components/shared/PageHero'
import ArtistModal from '../components/artists/ArtistModal'

export default {
    name: 'ArtistPage',
    components: {
        ArtistList,
        PageHero,
        ArtistModal
    }
}
</script>