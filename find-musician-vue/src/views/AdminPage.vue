<template>
    <div>
        <page-hero title="Administrator" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>
        <div class="container py-5">
            <div class="row g-4">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Administrer artister</h5>
                            <p class="card-text">På denne siden vil du ha mulighet til å oppdatere informasjon om artister eller slette dem fra databasen.</p>
                                <router-link :to="{ name:'AdminArtistPage' }">
                                    <div class="btn btn-primary">Artister</div>
                                </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Administrer oppdrag</h5>
                            <p class="card-text">På denne siden vil du ha mulighet til å redigere oppdrag eller slette dem fra databasen.</p>
                                <router-link :to="{ name:'AdminBookingPage' }">
                                    <div class="btn btn-primary">Oppdrag</div>
                                </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Administrer omtaler</h5>
                            <p class="card-text">På denne siden vil du ha mulighet til å slette omtaler av artister som ikke er i tråd med rettningslinjene.</p>
                                <router-link :to="{ name:'AdminReviewsPage' }">
                                    <div class="btn btn-primary">Omtaler</div>
                                </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHero from '../components/shared/PageHero'

export default {
    name: 'AdminPage',
    components: {
        PageHero
    }
}
</script>