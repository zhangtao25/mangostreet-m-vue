<template>
  <div>
    <follow></follow>
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
</style>
