<template>
  <div class="follow">
    <div class="wrap">
      <note-item v-for="(item,index) of noteData" :note-data="item" :key="index"></note-item>
    </div>
  </div>
</template>

<script>
  import NoteItem from './note-item'
  import NoteService from './../../service/note'

  export default {
    components: {
      'note-item': NoteItem
    },
    data() {
      return {
        noteData:null
      }
    },
    mounted(){
      NoteService.getNote().then(res=>{
        // console.log(res,11111)
        this.noteData = res
      })
    },
    methods: {
    },
  }

</script>
<style lang="scss">
  .follow{
    .wrap{
      column-count: 2;
      column-gap: 10px;
      width: 100%;
      background-color: #fafafa;
      padding: 0 10px;
      box-sizing: border-box;
      .note-item{
        break-inside:avoid;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
      }
    }
  }
</style>
