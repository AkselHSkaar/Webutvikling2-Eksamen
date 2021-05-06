<template>
    <div class="container col-xxl-12 px-4 py-0-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-lg-6 col-xxl-6">
          <h1 class="display-4 fw-bold lh-1 mb-3">Profesjonelle artister med lang erfaring fra bransjen</h1>
          <p class="lead">Alle våre artister har lang erfaring fra bransjen og har fra før gjennomført mange events. Du kan derfor være sikker på at artistene våre opptrer profesjonellt og at alt går som planlagt.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
            <router-link :to="{ name:'ArtistPage' }">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Vis artister</button>
            </router-link>
            <router-link :to="{ name:'AddArtistPage' }">
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Registrer en artist</button>
            </router-link>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-6">
          <img :src="require('@/assets/artist-front-page-2.jpg')" class="section-image d-block mx-lg-auto img-fluid rounded-3 shadow-lg" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ActionSectionArtist'
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