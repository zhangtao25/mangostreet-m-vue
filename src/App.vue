<template>
  <div>
    <transition name="slide-in">
      <router-view/>
    </transition>
    <app-tab-bar></app-tab-bar>
  </div>
</template>

<script>
  import AppTabBar from './layouts/app-tab-bar'
  export default {
    components: {
      [AppTabBar.name]: AppTabBar
    },
    data() {
      return {
      }
    }
  }

</script>

<style lang="stylus">
  @import '~mand-mobile/components/_style/global.styl'
  html
    font-size calc(10000vw / 750)
  body
    font-size 28px
    color #333
</style>

<style lang="scss">
  .transition {
    height: 100%;
    transition: transform 0.7s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .fixed {
    position: fixed;
    width: 100%;
    top: 0;
    overflow: hidden;
  }
  .slide-in-leave-to {
    @extend .fixed;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-in-leave-active {
    @extend .fixed;
    @extend .transition;
  }
  .slide-in-enter {
    @extend .fixed;
    transform: translate3d(100%, 0, 0);
  }
  .slide-in-enter-active {
    @extend .fixed;
    @extend .transition;
  }
  .slide-in-enter-to {
    @extend .fixed;
    transform: translate3d(0, 0, 0);
  }

  .slide-out-leave-to {
    @extend .fixed;
    transform: translate3d(100%, 0, 0);
  }
  .slide-out-leave-active {
    @extend .transition;
    @extend .fixed;
  }
  .slide-out-enter {
    @extend .fixed;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-out-enter-active {
    @extend .transition;
    @extend .fixed;
  }
  .slide-out-enter-to {
    transform: translate3d(0, 0, 0);
  }
</style>
