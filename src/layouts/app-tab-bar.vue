<template>
  <div class="app-tab-bar">
    <ul>
      <li v-for="(item,index) of items" :key="index" :class="{actived:item.name === current}" @click="goTo(item.name)">
        <span v-if="item.name !== 3">{{item.label}}</span>
        <img v-if="item.name === 3" class="add" src="./../assets/images/add.png" alt="">
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
        if (name === 1){
          this.$router.push({path:'/home'})
        } else if (name === 2){
          this.$router.push({path:'/mall'})
        } else if (name === 3){
          this.$router.push({path:'/add'})
        } else if (name === 4){
          this.$router.push({path:'/msg'})
        } else if (name === 5){
          this.$router.push({path:'/mine'})
        }
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
      height: 85px;
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    li.actived{
      color: #333;
      font-size: 32px;
    }
    .add{
      width: 92px;
    }
  }

</style>
