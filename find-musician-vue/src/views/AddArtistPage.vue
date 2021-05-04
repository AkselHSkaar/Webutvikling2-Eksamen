<template>
    <div>
        <page-hero title="Registrer en artist" description="Fyll inn skjemaet under for å legge til en ny artist i databasen." image="artist-hero-bg.jpg"></page-hero>

        <div class="container py-5">
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