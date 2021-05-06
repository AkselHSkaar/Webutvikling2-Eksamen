<template>
    <article>
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4 col-lg-3">
                    <img :src="`https://localhost:5001/images/${image}`" class="card-img-top" alt="...">
                </div>
                <div class="col-md-8 col-lg-9">
                    <div class="card-body">
                        <h5 class="card-title mb-2">{{ title }}</h5>
                        <p class="fs-5">Dato: {{ date }}</p>
                        <p class="fs-5">Fra kl {{ startTime }} til kl {{ endTime }}</p>
                        <p>Sjanger: {{ genre }}</p>
                        <p>Budsjett: {{ price }}</p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}`" aria-expanded="false" aria-controls="collapse">
                            Les mer
                        </button>
                    </div>
                </div> 
                <div class="collapse row col-12 p-3" :id="`collapse${id}`">
                    <div class="col-12 col-lg-6">
                        <p class="fs-5 fw-bold">Beskrivelse</p>
                        <p class="">{{ description }}</p>
                    </div>
                    <div class="col-12 col-lg-6">
                        <p class="fs-5 fw-bold">Kontaktinfo</p>
                        <p>Navn: {{ customerName }}</p>
                        <p>E-post: {{ customerEmail }}</p>
                        <p>Telefon: {{ customerPhone }}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>

export default {
    name: 'BookingItem',
    props: {
        id: Number,
        title: String,
        description: String,
        date: String,
        startTime: String,
        endTime: String,
        genre: String,
        price: Number,
        customerName: String,
        customerEmail: String,
        customerPhone: String,
        image: String
    }
}
</script>

<style scoped>

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>