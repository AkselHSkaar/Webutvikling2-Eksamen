<template>
    <div class="hero-wrapper container-xl my-xl-5 my-lg-0 rounded-3 border shadow-lg">
      <div class="hero-content-wrapper row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1">Book artister til ditt arrangement</h1>
          <p class="lead">På FindAMusician finner du profesjonelle artister som er klare til å levere en fantstisk musikkoplevelse til ditt arrangement. Vi har artister i alle sjangere og har lang erfaring med å levere underholdning av høyeste kvalitet!</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-4">
            <router-link :to="{ name:'AddBookingPage' }">
              <button class="btn btn-primary btn-lg px-4 me-md-2">Lag et oppdrag</button>
            </router-link>
            <router-link :to="{ name:'ArtistPage' }">
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Se våre artister</button>
            </router-link>
          </div>
        </div>
      </div>
      <img :src="require('@/assets/musician-playing.jpg')" class="hero-image w-50 d-none d-lg-block">
      <div class="hero-image-overlay w-50"></div>
    </div>
</template>

<script>
export default {
  name: 'TheHero'
}
</script>

<style scoped>
    .hero-wrapper{
      position: relative;
      overflow: hidden;
    }

    .hero-content-wrapper{
      position: relative;
      z-index: 2;
    }

    .hero-image{
        width: 100%;
        height: 100%;
        position: absolute;
        left: auto;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        background-position: center;
        object-fit: cover;
    }

    .hero-image-overlay{
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8141631652661064) 20%, rgba(255,255,255,0) 100%);
        position: absolute;
        left: auto;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
    }
</style>