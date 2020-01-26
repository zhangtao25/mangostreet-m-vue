<template>
  <div class="app-tab-bar">
    <ul>
      <li v-for="(item,index) of items" :key="index" :class="{actived:item.name === current}" @click="goTo(item.name)">
<!--        <span v-if="item.name !== 3">{{item.label}}</span>-->
        <i class="icon-tab-bar" v-if="item.name !== 3"></i>
<!--        <img v-if="item.name === 3" class="add" src="./../assets/images/add.png" alt="">-->
        <div v-if="item.name === 3" class="add">
          <span></span>
          <span></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'app-tab-bar',
    components: {
    },
    data() {
      return {
        current: 1,
        items: [
          {name: 1, label: '首页'},
          {name: 2, label: '商城'},
          {name: 3, label: 'add'},
          {name: 4, label: '消息'},
          {name: 5, label: '我的'},
        ],
      }
    },
    methods:{
      goTo(name){
        this.current = name
        // if (name === 1){
        //   this.$router.push({path:'/home'})
        // } else if (name === 2){
        //   this.$router.push({path:'/mall'})
        // } else if (name === 3){
        //   this.$router.push({path:'/add'})
        // } else if (name === 4){
        //   this.$router.push({path:'/msg'})
        // } else if (name === 5){
        //   this.$router.push({path:'/mine'})
        // }
      }
    }
  }

</script>

<style lang="scss">
  .app-tab-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      border-top: 0.5px solid #e5e5e5;
    }
    li{
      color: #9d9d9d;
      height: 100px;
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      i.icon-tab-bar{
        width: 53.3px;
        height: 53.3px;
        display: block;
        background-color: antiquewhite;
        background-size: auto 106.6px;
        background-image: url("./../assets/images/icon-tab-bar.png");
      }
    }
    li:nth-child(1){
      i.icon-tab-bar{

      }
    }
    li:nth-child(2){
      i.icon-tab-bar{
        background-position: -53.3px 0;
      }
    }

    li:nth-child(4){
      i.icon-tab-bar{
        background-position: -106.6px 0;
      }
    }
    li:nth-child(5){
      i.icon-tab-bar{
        background-position: -160px 0;
      }
    }

    li.actived{
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transform: scale(0.83);
      i.icon-tab-bar{
        transform: scale(1.2);
      }
    }
    li:nth-child(1).actived{
      i.icon-tab-bar{
        transform: scale(1.2);
        background-position: 0 53.3px;
      }
    }
    li:nth-child(2).actived{
      i.icon-tab-bar{
        background-position: -53.3px 53.3px;
      }
    }
    li:nth-child(4).actived{
      i.icon-tab-bar{
        background-position: -106.6px 53.3px;
      }
    }
    li:nth-child(5).actived{
      i.icon-tab-bar{
        background-position: -160px 53.3px;
      }
    }
    li:nth-child(3).actived{
      transition: none;
      transform: scale(1);
      i.icon-tab-bar{
        transform: scale(1);
      }
    }
    li:nth-child(3).actived .add{
      width: 70px;
      height: 70px;
      transition: 0.2s;
    }
    .add{
      width: 65px;
      height: 65px;
      border: 5px solid #333;
      border-radius: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        position: absolute;
        width: 30px;
        height: 6px;
        background-color: #333333;
      }
      span:nth-child(1){
        transform: rotate(90deg);
      }
    }
  }
</style>
