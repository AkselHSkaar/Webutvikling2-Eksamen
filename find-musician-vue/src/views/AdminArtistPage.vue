<template>
    <div>
        <h1>Admin artist page</h1>
        <admin-artist-list></admin-artist-list>
    </div>
</template>

<script>
import AdminArtistList from '../components/admin/AdminArtistList'

export default {
    name: 'AdminArtistPage',
    components: {
        AdminArtistList
    }
}
</script>