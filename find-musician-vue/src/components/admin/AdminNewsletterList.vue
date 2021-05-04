<template>
    <section>
        <div v-for="( newsletter, i ) in newsletterList" :key="i">
            <admin-newsletter-item
            :id="newsletter.id"
            :email="newsletter.email"
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
        
        const { getNewsletter, newsletterList } = newsletterService();

        getNewsletter();

        console.log(newsletterList)

        return { newsletterList }

    }
}
</script>