<template>
    <div class="container pt-3">
        <h3>Alle registrerte email adresser:</h3>
        <admin-newsletter-list></admin-newsletter-list>
    </div>
</template>

<script>
import AdminNewsletterList from '../components/admin/AdminNewsletterList'

export default {
    name: 'AdminNewsletterPage',
    components: {
        AdminNewsletterList
    }
}
</script>