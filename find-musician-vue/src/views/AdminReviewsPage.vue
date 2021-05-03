<template>
    <section>
        <h1>Admin reviews page</h1>
        <admin-review-list></admin-review-list>
    </section>
</template>

<script>
import AdminReviewList from '../components/admin/AdminReviewList'

export default {
    name: 'AdminReviewPage',
    components: {
        AdminReviewList
    }
}

</script>