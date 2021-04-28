<template>
    <section>
        <div class="row g-4">
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( artist, i ) in artistList" :key="i">
                <artist-item
                    :name="artist.name"
                    :genre="artist.genre"
                    :price="artist.price"
                    :instrument="artist.instrument"
                    :biography="artist.biography"
                    :rating="artist.rating"
                    :image="artist.image"
                ></artist-item>
            </div>
        </div>
        
    </section>
</template>

<script>
import ArtistItem from './ArtistItem'
import artistService from '../../services/artistService'

export default {
    name: 'ArtistList',
    components: {ArtistItem},
    setup() {
        const { artistList, getArtists } = artistService();
        
        getArtists();

        return{
            artistList
        }
    }
}
</script>

<style scoped>

</style>