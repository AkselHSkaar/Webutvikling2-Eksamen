<template>
    <div class="container col-xxl-12 px-4 py-5-0">
      <div class="row flex-lg-row align-items-center g-5 py-5">
        <div class="col-lg-6 col-xxl-6">
          <h1 class="display-4 fw-bold lh-1 mb-3">Book en artist til ditt arrangement</h1>
          <p class="lead">Uansett hva slags arrangement du planlegger har vi en artist som kan stille opp på kort varsel. Når du oppretter et oppdrag vil artister som passer beskrivelsen du har gitt kontakte deg for å melde sin interesse.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
            <router-link :to="{ name:'AddBookingPage' }">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Lag et oppdrag</button>
            </router-link>
            <router-link :to="{ name:'BookingPage' }">
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Vis alle oppdrag</button>
            </router-link>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-6">
          <img :src="require('@/assets/artist-front-page-1.jpg')" class="section-image d-block mx-lg-auto img-fluid rounded-3 shadow-lg" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ActionSectionEvent'
}
</script>

<style scoped>
  .section-image {
    height: 100%;
    max-height: 450px;
    background-position: center;
    object-fit: cover;
  }
</style>