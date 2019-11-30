<template>
  <div id="mine">
    <div class="row">
      <i class="iconfont icon-list"></i>
      <p>
        <span>{{nickname}}</span>
        <span>小红书号：905019230</span>
      </p>
      <i class="iconfont icon-send"></i>
    </div>

    <div class="row">
      <div class="l">
<!--        <img :src="avatar" alt="">-->
        <div class="avatar" :style="{backgroundImage:`url(${avatar})`}"></div>
        <input type="file"  @change="uploadAvatar">
      </div>

      <div class="r">
        <div class="t">
          <p>
            <span>0</span>
            <span>关注</span>
          </p>
          <p>
            <span>0</span>
            <span>粉丝</span>
          </p>
          <p>
            <span>0</span>
            <span>获赞与收藏</span>
          </p>
        </div>

        <div class="b">
          <span @click="goTo('/setting')">编辑</span>
          <span>
            <i class="iconfont icon-set"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UserService from './../service/user'
  export default {
    data(){
      return{
        nickname:"",
        avatar:"",
        userId:0
      }
    },
    methods:{
      goTo(path){
        this.$router.push({path})
      },
      uploadAvatar(e){
        // console.log(e.target.files[0])
        UserService.uploadAvatar(e.target.files[0]).then(res=>{
          console.log(res.data.urls)
          this.avatar = "http://mangostreet.top:8001/user/" + res.data.urls

          let data = {
            avatar:this.avatar,
            nickname:this.nickname
          }
          UserService.editUserById({id:this.userId,data:data}).then(ress=>{
            console.log(ress)
          })
        })
      }
    },
    mounted() {
      UserService.getCurrent().then(res=>{
        console.log(res.data.nickname)
        this.nickname = res.data.nickname
        this.avatar = res.data.avatar
        this.userId = res.data.id
      })
    }
  }
</script>
<style lang="scss">
  #mine{
    .row:nth-child(1){
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      border-bottom: 1px solid #e6e6e6;
      p{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span:nth-child(2){
          font-size: 24px;
          color: #999999;
        }
      }
    }
    .row:nth-child(2){
      display: flex;
      .l{
        width: 215px;
        height: 215px;
        /*background-color: #5b92e1;*/
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        /*img{*/
        /*  width: 145px;*/
        /*  border-radius: 50%;*/
        /*  position: absolute;*/
        /*  z-index: 1;*/
        /*}*/
        .avatar{
          width: 145px;
          height: 145px;
          border-radius: 50%;
          position: absolute;
          z-index: 1;
          background-size: cover;
        }
        input{
          width: 145px;
          position: absolute;
          z-index: 2;
          opacity: 0;
        }
      }
      .r{
        /*background-color: rebeccapurple;*/
        height: 215px;
        flex: 1;
        .t{
          display: flex;
          justify-content: space-around;
          padding: 33px 33px 0 33px;
          margin-bottom: 30px;
          p{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            span:nth-child(2){
              color: #666;

            }
          }
        }
        .b{
          display: flex;
          flex-direction: row;
          border: 1px solid white;
          justify-content: space-around;
          padding-right: 25px;
          span:nth-child(1){
            display: block;
            width: 400px;
            height: 56px;
            border-radius: 28px;
            border: 1px solid #999999;
            text-align: center;
            line-height: 56px;
          }
          span:nth-child(2){
            display: block;
            width: 70px;
            height: 56px;
            border-radius: 28px;
            border: 1px solid #999999;
            text-align: center;
            line-height: 56px;
          }
        }
      }
    }
  }
</style>
