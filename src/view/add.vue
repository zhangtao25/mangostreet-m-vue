<template>
  <div id="add">
    <div class="row">
      <span @click="goTo('/home')">取消</span>
      <span @click="onSubmit">确定</span>
    </div>
    <div class="row">
      <md-field>
        <md-input-item placeholder="请输入标题" v-model="title"></md-input-item>
      </md-field>
      <md-field>
        <md-textarea-item
          ref="demo2"
          class="demo2"
          :autosize="true"
          v-model="value"
          :max-length="100"
          :max-height="150"
          placeholder="描述信息在100字以内"
        >
          <template slot="footer">
            <p class="demo2-footer">
            <span
              class="demo2-footer-left"
              v-if="value.length"
            >{{ value.length }}/100</span>
            </p>
          </template>
        </md-textarea-item>
      </md-field>
    </div>
    <div class="row">
      <image-reader ref="imageReader" @giveData="giveData"></image-reader>
    </div>
    <div class="row">
      <md-field>
        <md-cell-item :class="{'selected':(locateAddress !== null)}" :title="locateAddress===null?'所选地址':locateAddress" arrow @click="fn">
          <div class="icon" slot="left">
            <md-icon name="location"/>
          </div>

        </md-cell-item>
      </md-field>
    </div>
    <div class="location-selector" v-show="isShowLocationSelector">
      <iframe id="location-selector-iframe" :src="'https://m.amap.com/picker/?center='+currentLocation+'&key=b377f3b0be063e4ee2b2b8d40afae0d7'"></iframe>
    </div>
  </div>
</template>
<script>
  import {TextareaItem, Field, Icon ,InputItem} from 'mand-mobile'
  import imageReader from './add/image-reader'
  import NoteService from './../service/note'

  export default {
    data() {
      return {
        title:"",
        value: '',
        isShowLocationSelector:false,
        locateAddress:null,
        currentLocation:"0,0",
        images:""
      }
    },
    components: {
      [TextareaItem.name]: TextareaItem,
      [Field.name]: Field,
      [Icon.name]: Icon,
      [InputItem.name]: InputItem,
      'image-reader':imageReader
    },
    methods:{
      fn(){
        this.isShowLocationSelector = true
      },
      goTo(path){
        this.$router.push({path})
      },
      onSubmit(){
        let postData = {
          "title": this.title,
          "content": this.value,
          "contentType":"normal",
          "images":this.images
        }
        NoteService.createNote(postData).then(res=>{
          console.log(res)
        })
      },
      giveData(val){
        this.images = val.join(";")
      },
      initLocationSelector(){
        let _this = this
        var iframe = document.getElementById('location-selector-iframe').contentWindow;
        document.getElementById('location-selector-iframe').onload = function(){
          iframe.postMessage('hello','https://m.amap.com/picker/');
        };
        window.addEventListener("message", function(e){
          if (e.data.name && e.data.location){
            _this.locateAddress = e.data.name;
            _this.isShowLocationSelector = false
          }
        }, false);
        //获取用户所在城市信息
        function showCityInfo() {
          //实例化城市查询类
          var citysearch = new AMap.CitySearch();
          //自动获取用户IP，返回当前城市
          citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.city && result.bounds) {
                var cityinfo = result.city;
                var citybounds = result.bounds;
                _this.currentLocation = citybounds.getCenter().M + ',' +citybounds.getCenter().O
              }
            } else {
            }
          });
        }
        showCityInfo();
      }
    },
    mounted() {
      this.initLocationSelector()
    }
  }
</script>
<style lang="scss">
  #add {
    .location-selector{
      top: 0;
      left: 0;
      position: absolute;
      background-color: white;
      height: 100%;
      width: 100%;
      z-index: 1000;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    .row:nth-child(1) {
      display: flex;
      justify-content: space-between;
      padding: 30px;

      span {
        line-height: 67px;
        text-align: center;

        border-radius: 5px;
      }

      span:nth-child(2) {
        color: white;
        width: 115px;
        background-color: #ff5257;
      }
    }
    .row:nth-child(3){
      padding: 0 70px;
    }

    .row:nth-child(4){

      .selected{
        .icon, p{
          color: #ff5257;
        }
      }
      padding: 0 70px;
    }
  }
</style>
