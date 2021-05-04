<template>
    <div>
        <section>
            <h2 class="mb-5">Alle artister:</h2>
            <div class="row g-4">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( artist, i ) in artistList" :key="i">
                    <admin-artist-item
                    :id="artist.id"
                    :name="artist.name"
                    :genre="artist.genre"
                    :price="artist.price"
                    :instrument="artist.instrument"
                    :biography="artist.biography"
                    :rating="artist.rating"
                    :image="artist.image"
                    ></admin-artist-item>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import artistService from '../../services/artistService'
import AdminArtistItem from '../../components/admin/AdminArtistItem'

export default {
    name: 'AdminArtistList',
    components: {
        AdminArtistItem
    },
    setup(){

        const { artistList, getArtists } = artistService();

        getArtists();

        return {
            artistList
        }
    }
}
</script>