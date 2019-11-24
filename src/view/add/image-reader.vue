<template>
  <div class="md-example-child md-example-child-reader md-example-child-reader-0">
    <ul class="image-reader-list">
      <li
        class="image-reader-item"
        v-for="(img, index) in imageList['reader0']"
        :key="index"
        :style="{
          'backgroundImage': `url(http://mangostreet.top:8001/note/${img})`,
        }">
        <md-tag
          class="image-reader-item-del"
          size="small"
          shape="quarter"
          fill-color="#111A34"
          type="fill"
          font-color="#fff"
          @click.native="onDeleteImage('reader0', index)"
        >
          <md-icon name="close"></md-icon>
        </md-tag>
      </li>
      <li class="image-reader-item add">
        <md-image-reader
          name="reader0"
          :amount="(amount - imageList['reader0'].length) === 0 ? -1 : (amount - imageList['reader0'].length)"
          @select="onReaderSelect"
          @complete="onReaderComplete"
          @error="onReaderError"
          is-multiple
        ></md-image-reader>
        <md-icon name="camera" size="md" color="#CCC"></md-icon>
        <p>添加图片</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {Icon, ImageReader, Tag, Toast} from 'mand-mobile'
  import NoteService from './../../service/note'

  export default {
    name: 'image-reader-demo',
    components: {
      [Icon.name]: Icon,
      [ImageReader.name]: ImageReader,
      [Tag.name]: Tag,
    },
    data() {
      return {
        imageList: {
          reader0: [
          ]
        },
        amount:9
      }
    },
    methods: {
      onReaderSelect(name, {files}) {
        files.forEach(file => {
          console.log('[Mand Mobile] ImageReader Selected:', 'File Name ' + file.name)
          NoteService.upload(file).then(res=>{
            // this.$set(this.imageList, name, demoImageList)
            this.imageList.reader0.push(res.data.urls)
            this.$emit("giveData",this.imageList.reader0)
          })
        })
        Toast.loading('图片读取中...')
      },
      onReaderComplete(name, obj) {
        Toast.hide()
      },
      onReaderError(name, err) {
        console.log(err)
        if (err.code === "103"){
          Toast.failed("图片超出限制")
        }
      },
      onDeleteImage(name, index) {
        this.imageList.reader0.splice(index, 1)
        this.$emit("giveData",this.imageList.reader0)
      },
    },
  }

</script>

<style lang="stylus" scoped>
  .md-example-child-reader
    .image-reader-list
      float left
      width 100%
      .image-reader-item
        backgroundPosition: center center
        backgroundRepeat no-repeat
        backgroundSize cover
        position relative
        float left
        width 31%
        padding-bottom 31%
        margin-bottom 2%
        margin-right 2%
        background #FFF
        box-shadow 0 5px 20px rgba(197, 202, 213, .25)
        box-sizing border-box
        list-style none
        border-radius 4px
        background-size cover
        overflow hidden
        &:nth-of-type(4n)
          margin-right 0
        &.add
          .md-icon
            position absolute
            top 40%
            left 50%
            transform translate(-50%, -50%)
            opacity .5
          p
            position absolute
            top 50%
            left 0
            width 100%
            margin-top 15px
            font-size 22px
            color #CCC
            text-align center
        .image-reader-item-del
          position absolute
          top 0
          right 0
          z-index 3
          opacity .8
          .md-icon-close
            font-size 24px
</style>
