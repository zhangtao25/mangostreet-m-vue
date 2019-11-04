<template>
  <div class="header-nav-bar">
    <div class="row">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    components:{
    }
  }
</script>
<style lang="scss">
  .header-nav-bar{
    .row{
      line-height: 93px;
      font-size: 32px;
      font-weight: bolder;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 5px 2px rgba(0,0,0,.1);
      .r{
        opacity: 0;
      }
      .l{
        font-weight: bolder;
      }
    }
  }
</style>
