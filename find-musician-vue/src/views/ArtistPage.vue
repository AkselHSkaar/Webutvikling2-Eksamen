<template>
    <div>
        <page-hero title="Artists" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>
        <div class="container py-5">
            <artist-list></artist-list>
            <artist-create></artist-create>
            <artist-search class="mt-5"></artist-search> 
        </div>
    </div>
</template>


<script>
import ArtistList from '../components/artists/ArtistList'
import ArtistCreate from '../components/artists/ArtistCreate'
import ArtistSearch from '../components/artists/ArtistSearch'
import PageHero from '../components/shared/PageHero'

export default {
    name: 'ArtistPage',
    components: {
        ArtistList,
        ArtistCreate,
        ArtistSearch,
        PageHero
    }
}
</script>