<template>
  <div>
    <router-view/>
<!--    <app-tab-bar></app-tab-bar>-->
  </div>
</template>

<script>
  import AppTabBar from './layouts/app-tab-bar'
  import axios from 'axios'
  export default {
    components: {
      [AppTabBar.name]: AppTabBar
    },
    data() {
      return {
      }
    },
    mounted() {
      axios.get("http://localhost:8000/hello").then(res=>{
        console.log(res)
      })
    }
  }

</script>
<style>
</style>

<style lang="stylus">
  @import '~mand-mobile/components/_style/global.styl'
  html
    font-size calc(10000vw / 750)
  body
    font-size 28px
    color #333
</style>
