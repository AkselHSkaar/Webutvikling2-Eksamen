<template>
    <section>
        <page-hero 
            title="Administrer omtaler" 
            description="Her kan du slette omtaler av artister som ikke er i tråd med retningslinjene." 
            image="artist-hero-bg.jpg">
        </page-hero>
        <div class="container py-5">
            <admin-review-list></admin-review-list>
        </div>
        
    </section>
</template>

<script>
import PageHero from '../components/shared/PageHero'
import AdminReviewList from '../components/admin/AdminReviewList'

export default {
    name: 'AdminReviewPage',
    components: {
        AdminReviewList,
        PageHero
    }
}

</script>