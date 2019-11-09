<template>
  <div class="setting">
    <header-nav-bar>
      <md-icon class="l" name="arrow-left" @click="goTo('/mine')"/>
      <span>编辑资料</span>
      <md-icon class="r" name="arrow-left"/>
    </header-nav-bar>

    <div class="md-example-child">
      <md-field>
        <md-cell-item title="修改名字" addon="张涛" arrow @click="goTo('/setting/edit/nickname')" />
        <md-cell-item title="小红书号" addon="905019230" arrow />
        <md-cell-item title="性别" :addon="selectorValue" arrow @click="showSelector"/>
        <md-cell-item title="常住地" :addon="addressStr" arrow @click="show = !show"/>
        <md-cell-item title="学校" addon="淮南师范学院" arrow />
        <md-cell-item title="生日" addon="1995-10-24" arrow />
        <md-cell-item title="个性签名" addon="今天又是充满希望的一天" arrow />
      </md-field>

      <md-selector
        v-model="isSelectorShow"
        default-value="1"
        :data="data0"
        max-height="320px"
        title="选择性别"
        large-radius
        okText="确认"
        @confirm="onSelectorChoose"
      ></md-selector>

      <md-tab-picker
        title="请选择"
        describe="请选择您所在的省份、城市、区县"
        large-radius
        :data="data1"
        v-model="show"
        @change="handleChange"
      />


    </div>
  </div>
</template>
<script>
  import HeaderNavBar from './../../components/header-nav-bar'
  import areaData from './../../assets/data/area'
  import Util from './../../common/util'
  import data from 'mand-mobile/components/tab-picker/demo/data'


  export default {
    components:{
      'header-nav-bar': HeaderNavBar
    },
    data() {
      return {
        open: false,
        isSelectorShow: false,
        show:false,
        address:[],
        data0: [
          {
            value: '1',
            text: '男',
          },
          {
            value: '2',
            text: '女',
          },
        ],
        data1:{},
        selectorValue: '男',
      }
    },
    mounted(){
      this.data1 = Util.formatAreaData(areaData);
    },
    computed: {
      addressStr() {
        return this.address.map(item => item.label).join(' ')
      },
    },
    methods:{
      goTo(path){
        this.$router.push({path})
      },
      showSelector() {
        this.isSelectorShow = true
      },
      onSelectorChoose({text}) {
        this.selectorValue = text
      },
      handleChange({options}) {
        console.log(options)
        this.address = options
      },
    }
  }
</script>
<style lang="scss">
  .setting{
    /*background-color: #fafafa;*/
    /*width: 100%;*/
    /*min-height: 100vh;*/
    .md-example-child{
      margin-top: 10px;
      .md-cell-item-title{
        font-size: 28px;
      }
    }
  }
</style>
