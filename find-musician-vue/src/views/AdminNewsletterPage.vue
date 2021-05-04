<template>
    <div>
        <h1>Administrer nyhetsbrev</h1>
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