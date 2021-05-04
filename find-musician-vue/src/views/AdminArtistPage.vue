<template>
    <div>
        <page-hero title="Administrer artister" description="Her kan du redigere eller slette artister i databasen." image="artist-hero-bg.jpg"></page-hero>
        
        <div class="container py-5">
            <admin-artist-list></admin-artist-list>
        </div>
    </div>
</template>

<script>
import AdminArtistList from '../components/admin/AdminArtistList'
import PageHero from '../components/shared/PageHero'

export default {
    name: 'AdminArtistPage',
    components: {
        AdminArtistList,
        PageHero
    }
}
</script>