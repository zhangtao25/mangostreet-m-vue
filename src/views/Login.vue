<template>
  <div id="app">
    <md-field title="登录">
      <md-input-item
        ref="input0"
        title="用户名"
        placeholder="请输入用户名"
        v-model="username"
      ></md-input-item>

      <md-input-item
              ref="input1"
              title="密码"
              placeholder="请输入密码"
              v-model="password"
              style="margin-bottom: .2rem"
      ></md-input-item>

      <md-button type="primary" @click="onClickLogin">登录</md-button>

    </md-field>
  </div>
</template>

<script>
  import AuthService from './../api/auth'
  export default {
    data(){
      return{
        username:'',
        password:''
      }
    },
    methods:{
      onClickLogin(){
        console.log(this.username,this.password)
      }
    }
  }
</script>

<style>
</style>
