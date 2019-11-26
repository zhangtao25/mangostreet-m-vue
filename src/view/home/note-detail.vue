<template>
  <div class="note-detail">
    <div class="md-example-child md-example-child-swiper md-example-child-swiper-0">
      <md-swiper
        @before-change="beforeChange"
        @after-change="afterChange"
        ref="swiper"
        :is-prevent="false"
        :useNative-driver="false"
      >
        <md-swiper-item :key="$index" v-for="(item, $index) in simple">
          <div
            class="banner-item"
            :style="{'background': `${item.color}`}">{{item.text}}
          </div>
        </md-swiper-item>
      </md-swiper>
    </div>

    <div class="content">
      <div>
        <div class="row">
          <p class="left">
            <img class="avatar-img" src="./../../assets/images/touxiang.jpg" alt="">
            <span class="user">请叫我张温柔</span>
          </p>

          <p class="right">
            <span>+</span>
            <span>关注</span>
          </p>
        </div>

        <div class="row">
          <p class="title">一路向北</p>
          <p class="note-content">后视镜里的世界 越来越远的道别 你转身向背 侧脸还是很美 我用眼光去追 竟听见你的泪 在车窗外面徘徊 是我错失的机会 你站的方位 跟我中间隔着泪 街景一直在后退 你的崩溃在窗外零碎 我一路向北 离开有你的季节 你说你好累 已无法再爱上谁 风在山路吹 过往的画面全都是我不对 细数惭愧 我伤你几回 后视镜里的世界 越来越远的道别 你转身向背 侧脸还是很美 我用眼光去追 竟听见你的泪 在车窗外面徘徊 是我错失的机会 你站的方位 跟我中间隔着泪 街景一直在后退 你的崩溃在窗外零碎 我一路向北 离开有你的季节 你说你好累 已无法再爱上谁 风在山路吹 过往的画面全都是我不对 细数惭愧 我伤你几回 我一路向北 离开有你的季节 方向盘周围 回转着我的后悔 我加速超越 却甩不掉...</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import {Swiper, SwiperItem} from 'mand-mobile'
  import simple from 'mand-mobile/components/swiper/demo/data/simple'

  export default {
    name: 'swiper-demo',
    components: {
      [Swiper.name]: Swiper,
      [SwiperItem.name]: SwiperItem,
    },
    data() {
      return {
        simple,
      }
    },
    mounted() {
// Simulation of asynchronous
      setTimeout(() => {
        this.simple = simple.concat(simple)
      }, 10000)
// Simulation of asynchronous
      setTimeout(() => {
        this.simple = simple
      }, 24500)
      window.triggerSwiper0 = () => {
        this.goto()
      }
      window.triggerSwiper1 = () => {
        this.play()
      }
      window.triggerSwiper2 = () => {
        this.stop()
      }
    },
    methods: {
      setValue(id, value) {
        document.querySelector(id) && (document.querySelector(id).innerHTML = value)
      },
      beforeChange(from, to) {
        this.setValue('#valueSwiper0', from)
        this.setValue('#valueSwiper1', to)
      },
      afterChange(from, to) {
        this.setValue('#valueSwiper2', from)
        this.setValue('#valueSwiper3', to)
      },
      fn(index) {
        this.setValue('#valueSwiper4', index)
      },
      goto() {
        this.$refs.swiper.goto(2)
      },
      play() {
        this.$refs.swiper.play()
      },
      stop() {
        this.$refs.swiper.stop()
      },
    },
  }

</script>


<style lang="scss">
  .note-detail{
    .content{
      padding: 0 48px;
    }
    .row:nth-child(1){
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .left{
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar-img{
          width: 64px;
          border-radius: 50%;
        }
        .user{
          font-size: 30px;
          font-weight: bolder;
          margin-left: 10px;
        }
      }
      .right{
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 64px;
        border-radius: 32px;
        border: 1px solid #ff5257;
        color: #ff5257;
      }
    }

    .row:nth-child(2){
      padding-top: 20px;
      .title{
        font-size: 30px;
        font-weight: bolder;
      }
      .note-content{

      }
      p{
        line-height: 2;
      }
    }

  }
</style>

<style lang="stylus">
  .md-example-child-swiper-0
    height 1050px
    .banner-item
      float left
      width 100%
      height 100%
      line-height 250px
      text-align center
      font-size 28px
      color #FFF
      box-align center
      align-items center
      box-pack center
      justify-content center
      text-decoration-line none
</style>
