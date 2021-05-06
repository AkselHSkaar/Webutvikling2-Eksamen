<template>
    <section>
        <page-hero 
            title="Administrer nyhetsbrev" 
            description="Her ser du alle mailadressene som har meldt seg på nyhetsbrevet." 
            image="artist-hero-bg.jpg">
        </page-hero>
        <div class="container py-5">
            <h3 class="mb-5">Alle registrerte email adresser:</h3>
            <admin-newsletter-list></admin-newsletter-list>
        </div>
    </section>
</template>

<script>
import AdminNewsletterList from '../components/admin/AdminNewsletterList'
import PageHero from '../components/shared/PageHero'

export default {
    name: 'AdminNewsletterPage',
    components: {
        AdminNewsletterList,
        PageHero
    }
}
</script>