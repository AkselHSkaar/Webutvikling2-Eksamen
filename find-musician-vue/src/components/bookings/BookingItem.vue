<template>
    <article>

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