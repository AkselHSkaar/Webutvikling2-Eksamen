<template>
    <div class="hero-wrapper text-secondary px-4 py-5 text-center">
        <div class="hero-content py-5">
            <h1 class="display-5 fw-bold text-white">{{title}}</h1>
            <div class="col-lg-6 mx-auto">
                <p class="fs-5 mb-4 text-white">{{description}}</p>
            </div>
        </div>
        <img :src="require('@/assets/' + image)" class="hero-image">
        <div class="hero-image-overlay"></div>
    </div>
</template>

<script>
export default {
    name: 'ArtistItem',
    props: {
        title: String,
        description: String,
        image: String
    }
}
</script>

<style scoped>
    .hero-wrapper{
        position: relative;
    }

    .hero-content{
        position: relative;
        z-index: 2;
    }

    .hero-image{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        background-position: center;
        object-fit: cover;
    }

    .hero-image-overlay{
        background-color: black;
        opacity: 0.5;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
    }

</style>