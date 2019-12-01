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
        <md-swiper-item :key="$index" v-for="(item, $index) in images">
          <div
            class="banner-item"
            :style="{'backgroundImage': `url(http://mangostreet.top:8001/note/${item})`}">{{item.text}}
          </div>
        </md-swiper-item>
      </md-swiper>
    </div>

    <div class="content">
      <div>
        <div class="row">
          <p class="left">
            <img class="avatar-img" :src="avatar" alt="">
            <span class="user">{{nickname}}</span>
          </p>

          <p class="right">
            <span>+</span>
            <span>关注</span>
          </p>
        </div>

        <div class="row">
          <p class="title">{{title}}</p>
          <p class="note-content">{{content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import {Swiper, SwiperItem} from 'mand-mobile'
  import simple from 'mand-mobile/components/swiper/demo/data/simple'
  import NoteService from './../../service/note'

  // import

  export default {
    name: 'swiper-demo',
    components: {
      [Swiper.name]: Swiper,
      [SwiperItem.name]: SwiperItem,
    },
    data() {
      return {
        simple,
        title:"",
        images:"",
        content:"",
        nickname:"",
        avatar:"",
      }
    },
    mounted() {
      setTimeout(() => {
        this.simple = simple.concat(simple)
      }, 10000)
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

      console.log(this.$route.params.id)

      NoteService.getNoteById(this.$route.params.id).then(res=>{

        this.title = res.data.title
        this.content = res.data.content
        this.images = res.data.images.split(";")
        this.nickname = res.data.nickname
        this.avatar = res.data.avatar
        console.log(this.images)
      })

      // getNoteById
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
  .note-detail {
    .content {
      padding: 0 48px;
    }

    .row:nth-child(1) {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

      .left {
        display: flex;
        justify-content: center;
        align-items: center;

        .avatar-img {
          width: 64px;
          border-radius: 50%;
        }

        .user {
          font-size: 30px;
          font-weight: bolder;
          margin-left: 10px;
        }
      }

      .right {
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

    .row:nth-child(2) {
      padding-top: 20px;

      .title {
        font-size: 30px;
        font-weight: bolder;
      }

      .note-content {

      }

      p {
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
      background-size cover
</style>
