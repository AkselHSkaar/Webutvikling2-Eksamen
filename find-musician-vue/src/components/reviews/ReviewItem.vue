<template>
    <article>

        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Artist: {{artist}}</h6>
                <p class="card-text">{{text}}</p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'ReviewItem',
    props: {
        id: Number,
        stars: Number,
        title: String,
        text: String,
        artist: String
    }
}
</script>