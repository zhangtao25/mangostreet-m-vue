<template>
  <div class="md-example-child md-example-child-tabs md-example-child-tab-bar-6">
    <md-tab-bar
      v-model="current"
      :items="items"
      @change="onTabChange"
    ></md-tab-bar>
    <md-swiper
      ref="swiper"
      :autoplay="0"
      :is-prevent="false"
      :is-loop="false"
      :has-dots="false"
      @before-change="onSwiperChange"
    >
      <md-swiper-item>
        <follow></follow>
      </md-swiper-item>
      <md-swiper-item>

      </md-swiper-item>
      <md-swiper-item>

      </md-swiper-item>
    </md-swiper>
  </div>
</template>

<script>
  import Follow from './home/follow'

  export default {
    name: 'tab-bar-demo',
    components: {
      'follow': Follow
    },
    data() {
      return {
        current: 0,
        items: [{name: 0, label: '关注'}, {name: 1, label: '发现'},{name: 2, label: '上海'}],
      }
    },
    methods: {
      onSwiperChange(from, to) {
        this.current = to
      },
      onTabChange(item, index) {
        this.$refs.swiper.goto(index)
      },
    },
  }

</script>

<style>
  .md-example-child-tab-bar-6 .md-swiper {
    background: #FFF;
  }
  .md-example-child-tab-bar-6 .md-swiper .md-swiper-item {
    /*padding: 20px;*/
    /*box-sizing: border-box;*/
    /*font-size: 24px;*/
    /*line-height: 1.5;*/
    /*color: #666;*/
  }
</style>
