<template>
    <article>
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="fs-5">Dato: {{ date }}, fra kl {{ startTime }} til kl {{ endTime }}</p>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p>{{ description }}</p>
                <p>Dato: {{ date }}, fra kl {{ startTime }} til kl {{ endTime }}</p>
                <p>Sjanger: {{ genre }}</p>
                <p>{{ customerName }}</p>
                <p>{{ customerEmail }}</p>
                <p>{{ customerPhone }}</p>
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
        date: Number,
        startTime: String,
        endTime: String,
        genre: String,
        price: Number,
        customerName: String,
        customerEmail: String,
        customerPhone: String
    }
}
</script>