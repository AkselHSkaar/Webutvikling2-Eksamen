<template>
    <div>
        <h1>Admin booking page</h1>
        <admin-booking-list></admin-booking-list>
    </div>
</template>

<script>
import AdminBookingList from '../components/admin/AdminBookingList'

export default {
    name: 'AdminBookingPage',
    components: {
        AdminBookingList
    }
}
</script>