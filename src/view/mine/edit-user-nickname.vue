<template>
  <div class="edit-user-nickname">
    <header-nav-bar>
      <md-icon class="l" name="arrow-left" @click="goTo('/setting')"/>
      <span>编辑昵称</span>
      <md-icon class="r" name="arrow-left"/>
    </header-nav-bar>
  </div>
</template>
<script>
  import HeaderNavBar from './../../components/header-nav-bar'
  export default {
    components:{
      'header-nav-bar': HeaderNavBar
    },
    methods:{
      goTo(path){
        this.$router.push({path})
      },
    }
  }
</script>
