<template>
    <div>
        <section>
            <h1>Alle artister:</h1>
            <div class="row g-4">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( artist, i ) in artistList" :key="i">
                    <admin-artist-item
                    :id="artist.id"
                    :name="artist.name"
                    :genre="artist.genre"
                    :price="artist.price"
                    :instrument="artist.instrument"
                    :biography="artist.biography"
                    :rating="artist.rating"
                    :image="artist.image"
                    ></admin-artist-item>
                </div>
            </div>
        </section>

        <section>
            <h1>Alle oppdrag:</h1>
            <article v-for="( booking, i ) in bookingList" :key="i">
                <h3>{{ booking.title }}</h3>
            </article>
        </section>

        <section>
            <h1>Alle anmeldelser:</h1>
            <article v-for="( review, i ) in reviewList" :key="i">
                <h3>{{ review.title }}</h3>
            </article>
        </section>
    </div>
</template>

<script>
import artistService from '../../services/artistService'
import bookingService from '../../services/bookingService'
import reviewService from '../../services/reviewService'
import AdminArtistItem from '../../components/admin/AdminArtistItem'

export default {
    name: 'AdminArtistList',
    components: {
        AdminArtistItem
    },
    setup(){

        const { artistList, getArtists } = artistService();
        const { bookingList, getBookings } = bookingService();
        const { reviewList, getReviews } = reviewService();

        getArtists();
        getBookings();
        getReviews();

        return {
            artistList,
            bookingList,
            reviewList
        }
    }
}
</script>