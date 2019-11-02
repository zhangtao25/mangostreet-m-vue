<template>
  <transition name="slide-in">
    <div class="user-agreement-privacy-policy" v-show="isShow">
      用户协议
    </div>
  </transition>

</template>
<script>
  export default {
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      onclose(){
        this.isShow = false
      }
    }
  }
</script>
<style>
  .user-agreement-privacy-policy{
    width: 100%;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
</style>
