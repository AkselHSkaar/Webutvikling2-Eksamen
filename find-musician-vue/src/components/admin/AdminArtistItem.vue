<template>
    <article>
        <div class="card">
            <img :src="`https://localhost:5001/images/${image}`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <p>Pris per time: {{ price }},- NOK</p>
                <p class="card-text">{{ biography }}</p>
                <p>Rating (1-5): {{ rating }}</p>
                <p>Sjanger: {{ genre }}</p>
                <p>Instrument: {{ instrument }}</p>
                <div>
                    <button @click="getArtist" class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}`" aria-expanded="false" aria-controls="collapse">
                        Rediger
                    </button>
                    <button @click="deleteFromDb" class="btn btn-danger" type="button">
                        Slett
                    </button>
                </div>
                <div class="collapse" :id="`collapse${id}`">
                    <div>
                        <form>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.name" type="text" id="name-input" class="form-control" placeholder="Navn">
                                <label for="name-input">Navn</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.genre" type="text" id="genre-input" class="form-control" placeholder="Sjanger">
                                <label for="genre-input">Sjanger</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.price" type="text" id="price-input" class="form-control" placeholder="Pris">
                                <label for="price-input">Pris per time</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.instrument" type="text" id="instrument-input" class="form-control" placeholder="Instrument">
                                <label for="instrument-input">Instrument: (Sang, Gitar..)</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.biography" type="text" id="biography-input" class="form-control" placeholder="Biografi">
                                <label for="biography-input">Biografi</label>
                            </div>
                            <div>
                                <div>
                                    <label>Bilde</label>
                                </div>
                                <input @change="setImage" class="form-control" type="file">
                            </div>
                            <div>
                                <input @click="updateArtist(artistById.id)" type="button" value="Rediger artist" class="form-control bg-success text-white mt-2">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import artistService from '../../services/artistService'

export default {
    name: 'AdminArtistItem',
    props: {
        id: Number,
        name: String,
        genre: String,
        price: Number,
        instrument: String,
        biography: String,
        rating: Number,
        image: String
    },
    setup(props){

        const {artistById, getArtistById, putArtist, deleteArtist} = artistService();

        const getArtist = () => {
            getArtistById( props.id );
        }

        const imageObject = new FormData();

        const setImage = ( e ) => {
            imageObject.append("file", e.target.files[0]);
            artistById.image = e.target.files[0].name;
        }

        const updateArtist = () => {
            const editArtist = (element, image) => {
            const artistToEdit = {
                id: parseInt( element.id ),
                name: element.name,
                genre: element.genre,
                price: parseInt( element.price ),
                instrument: element.instrument,
                biography: element.biography,
                rating: element.rating,
                image: image
            }

            putArtist( artistToEdit, imageObject );
            location.reload();

            }

            editArtist(artistById.value, artistById.image);

        }

        const deleteFromDb = () => {
            deleteArtist( props.id );
            location.reload();
        }

        return {
            artistById,
            updateArtist,
            getArtist,
            deleteFromDb,
            setImage
        }
    }
}
</script>

<style scoped>

img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

</style>