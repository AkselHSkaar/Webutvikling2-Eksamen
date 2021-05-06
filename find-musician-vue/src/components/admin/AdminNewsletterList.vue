<template>
    <section>
        <div class="row">
            <div v-for="( email, i ) in emailList" :key="i" class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <admin-newsletter-item
                    :id="email.id"
                    :email="email.email"
                ></admin-newsletter-item>
            </div>
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

        return {
            emailList 
        }

    }
}
</script>