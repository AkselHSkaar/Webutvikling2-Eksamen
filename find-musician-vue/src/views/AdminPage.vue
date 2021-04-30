<template>
    <div>
        <page-hero title="Administrator" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>
        <admin-artist-list></admin-artist-list>
    </div>
</template>

<script>
import PageHero from '../components/shared/PageHero'
import AdminArtistList from '../components/admin/AdminArtistList'

export default {
    name: 'AdminPage',
    components: {
        PageHero,
        AdminArtistList
    }
}
</script>