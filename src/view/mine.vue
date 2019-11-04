<template>
  <div id="mine">
    <div class="row">
      <i class="iconfont icon-list"></i>
      <p>
        <span>请叫我张温柔</span>
        <span>小红书号：905019230</span>
      </p>
      <i class="iconfont icon-send"></i>
    </div>

    <div class="row">
      <div class="l">
        <img src="./../assets/images/touxiang.jpg" alt="">
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
  export default {
    methods:{
      goTo(path){
        this.$router.push({path})
      },
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
        img{
          width: 145px;
          border-radius: 50%;
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
