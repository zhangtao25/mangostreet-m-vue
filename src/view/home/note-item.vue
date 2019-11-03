<template>
  <div class="note-item">
    <img :src="noteData.cover" alt="">
    <div class="title">{{noteData.title}}</div>
    <ul>
      <li>
        <img class="user-img" src="./../../assets/images/touxiang.jpg" alt="">
        <span>{{noteData.user_nickname}}</span>
      </li>
      <li>
        <i class="iconfont icon-love"></i>
        <span>{{noteData.collects}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import {Icon} from 'mand-mobile'
  export default {
    components:{
      [Icon.name]: Icon,
    },
    props:['noteData'],
    mounted() {
    }
  }
</script>

<style lang="scss">
  .note-item{
    /*width: 50%;*/
    .title{
      padding: 15px;
      font-size: 28px;
      font-weight: bolder;
      color: #333;
    }
    img{
      width: 100%;
    }
    .user-img{
      width: 50px;
      border-radius: 50%;
    }
    ul{
      display: flex;
      justify-content: space-between;
      padding: 0 15px 15px 15px;
      font-size: 24px;
      color: #5d5d5d;
      li{
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          margin-left: 10px;
        }
      }
    }
  }
</style>
