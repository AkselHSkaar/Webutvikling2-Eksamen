<template>
    <section>
        <div v-for="( email, i ) in emailList" :key="i">
            <admin-newsletter-item
            :id="email.id"
            :email="email.email"
            ></admin-newsletter-item>
        </div>
    </section>
</template>

<script>
import AdminNewsletterItem from './AdminNewsletterItem'
import newsletterService from '../../services/newsletterService'

export default {
    name: 'AdminNewsletterList',
    components: {
        AdminNewsletterItem
    },
    setup() {
        
        const { getEmail, emailList } = newsletterService();

        getEmail();

        return { emailList }

    }
}
</script>