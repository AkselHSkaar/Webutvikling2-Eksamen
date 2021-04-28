<template>
    <article>

        <div class="card">
            <img :src="`https://localhost:5001/images/${image}`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <p>Rating (1-5): {{ rating }}</p>
                <p>Sjanger: {{ genre }}, pris per time: {{ price }},- NOK</p>
                <p>Instrument: {{ instrument }}</p>
                <p class="card-text">{{ biography }}</p>
                <a href="#" class="btn btn-primary">Book artist</a>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'ArtistItem',
    props: {
        name: String,
        genre: String,
        price: Number,
        instrument: String,
        biography: String,
        rating: Number,
        image: String
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