<template>
    <section>

        <div class="row">
            <div class="col form-floating mb-3">
                <input v-model="inputValue" @keyup="listArtistsByName" type="text" class="form-control" id="floatingInput" placeholder="Ole ivars">
                <label for="floatingInput">Søk etter artist</label>
            </div>
        </div>
        
        <div>
            <div v-if="inputValue != ''" class="row g-4">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( artist, i ) in searchResult" :key="i">
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
            <div v-else class="row g-4">
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
            
        </div>
        
    </section>
</template>

<script>
import ArtistItem from './ArtistItem'
import artistService from '../../services/artistService'
import { ref } from 'vue'

export default {
    name: 'ArtistList',
    components: {ArtistItem},
    setup() {
        const { artistList, getArtists, searchResult, searchForArtist} = artistService();
        const inputValue = ref("");
        
        getArtists(); 

        const listArtistsByName = () =>{   
            searchForArtist( inputValue.value );
        }    
        
        return{
            artistList,
            inputValue,
            listArtistsByName,
            searchResult
        }
    }
}
</script>