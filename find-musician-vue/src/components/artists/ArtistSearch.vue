<template>
    <section>
        <h3>Søk etter en artist (med id)</h3>

        <div>
            <div>
                <label>Id:</label>
            </div>
            <input v-model="id" type="text" class="form-control">
            <input @click="getArtist" type="button" value="Søk etter artist" class="form-control bg-success text-white mt-2">
        </div>

        <div v-if="showArtist == true">
            <artist-item
            :name="artistById.name"
            :genre="artistById.genre"
            :price="artistById.price"
            :instrument="artistById.instrument"
            :biography="artistById.biography"
            :rating="artistById.rating"
            :image="artistById.image"
            ></artist-item>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'
import artistService from '../../services/artistService'
import ArtistItem from './ArtistItem'

export default {
    name: 'ArtistSearch',
    components: {
        ArtistItem
    },
    setup() {

        const id = ref();
        const showArtist = ref(false);
        const { artistById, getArtistById } = artistService();

        const getArtist = () => {
            getArtistById( id.value );
            showArtist.value = true;
        }

        return {
            id,
            artistById,
            getArtist,
            showArtist
        }
    }
}
</script>