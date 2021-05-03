<template>
    <div>
        <page-hero title="Registrer deg som artist" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>

        <div>
            <artist-create></artist-create>
        </div>
    </div>
</template>

<script>
import ArtistCreate from '../components/artists/ArtistCreate'
import PageHero from '../components/shared/PageHero'

export default {
    name: 'AddArtistPage',
    components: {
        PageHero,
        ArtistCreate
    }
}
</script>