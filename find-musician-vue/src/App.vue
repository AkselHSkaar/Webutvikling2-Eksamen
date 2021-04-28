<template>
  <div>

    <the-header :page-title="pageTitle"></the-header>

    <router-view></router-view>

    <the-footer></the-footer>
    
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import TheHeader from './components/shared/TheHeader'
import TheFooter from './components/shared/TheFooter'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      pageTitle: "Find A Musician"
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'DM sans', sans-serif;
}

img{
  max-width: 100%;
}

</style>