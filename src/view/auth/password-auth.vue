<template>
  <div class="password-auth">
    <div class="wrap">
      <div class="row">
        <md-icon name="arrow-left" @click="goTo('/auth/w')"></md-icon>
        <span @click="goTo('/auth/v')">验证码登录</span>
      </div>

      <div class="row">
        手机密码登录
      </div>

      <div class="row">
        <md-field>
          <md-input-item
            title="手机号"
            v-model="phone"
            placeholder="请输入手机号码"
          ></md-input-item>
          <md-input-item
            title="密码"
            type="password"
            v-model="password"
            placeholder="请输入密码"
          ></md-input-item>
        </md-field>
      </div>

      <div class="row">
        <p>登录注册代表同意<span>用户协议、隐私政策</span></p>
        <md-button type="warning" size="small" round @click="login">登录</md-button>
      </div>

      <div class="row">
        <p>-- 社交账号登录 --</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

    <user-agreement-privacy-policy ref="user"></user-agreement-privacy-policy>
  </div>
</template>
<script>
  import userAgreementPrivacyPolicy from './user-agreement-privacy-policy'
  import AuthService from './../../service/auth'
  export default {
    components:{
      'user-agreement-privacy-policy': userAgreementPrivacyPolicy
    },
    data(){
      return{
        phone: '',
        password:''
      }
    },
    methods: {
      goTo(path){
        this.$router.push({path})
      },
      login(){
        // username = this.Ctx.PostValueTrim("username")
        // password = this.Ctx.PostValueTrim("password")
        // ref      = this.Ctx.FormValue("ref")
        let postData = {
          username:this.phone,
          password:this.password,
          ref:"testref"
        }
        AuthService.authUsersByPasswordCode(postData).then(res=>{
          console.log(res)
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("userInfo", JSON.stringify(res.data.user))
          this.goTo("/home")
        })
      }
    },
  }
</script>
<style lang="scss">
  .password-auth{
    padding: 0 48px;
    background-color: white;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    z-index: 1000;
    min-height: 100%;
    .wrap{
      .row:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 115px;
        color: #999;
      }
      .row:nth-child(2){
        text-align: center;
        line-height: 190px;
        font-size: 60px;
      }
      .row:nth-child(4){
        padding: 0 50px;
        p{
          text-align: center;
          margin: 0 0 55px 0;
          span{
            color: #5b92e1;
          }
        }
      }
      .row:nth-child(5){
        position: fixed;
        bottom: 200px;
        left: 50%;
        transform: translate(-50%,0);
        p{
          text-align: center;
          margin-bottom: 45px;
          color: #999;
        }
        ul{
          display: flex;
          justify-content: space-between;
          width: 350px;
          li{
            width: 60px;
            height: 50px;
            background-color: wheat;
            background-image: url("./../../assets/images/disanfang-icon.jpg");
            background-size: cover;
          }
          li:nth-child(2){
            background-position: (-140px,0);
          }
          li:nth-child(3){
            background-position: (-280px,0);
          }
        }
      }
    }
  }
</style>
