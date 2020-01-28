<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>
<script>
  // import AuthService from './api/auth'
  export default {
    mounted() {
      // AuthService.login().then(res=>{
      //   console.log(res)
      // })
    }
  }
</script>

<style>
html{
  font-size: calc(10000vw / 375) ;
}
body{
  font-size: .14rem;
}
</style>
