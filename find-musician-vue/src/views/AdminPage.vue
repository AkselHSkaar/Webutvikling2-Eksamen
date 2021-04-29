<template>
    <div>
        <page-hero title="Administrator" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>

        <section>
            <h1>Alle artister:</h1>
            <article v-for="( artist, i ) in artistList" :key="i">
                <h3>{{ artist.name }}</h3>
            </article>
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
import PageHero from '../components/shared/PageHero'
import artistService from '../services/artistService'
import bookingService from '../services/bookingService'
import reviewService from '../services/reviewService'

export default {
    name: 'AdminPage',
    components: {
        PageHero
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