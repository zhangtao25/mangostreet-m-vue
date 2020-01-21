<template>
  <div class="search-list">
    <ul>
      <li class="list-wrap">
        <div class="li-checkbox">
        </div>
        <div class="li-detail">
          <p>
            王一博
          </p>
          <ul>
            <li>
              手机号：18158899797
            </li>
          </ul>
        </div>

        <div class="li-operate">
          operate
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {

  }
</script>

<style  lang="scss" scoped>
  .search-list{
    ul{
      li.list-wrap{
        display: flex;
        padding: 20px 0;
        border-bottom: 1px solid #eee;
        .li-checkbox{
          width: 38px;
          height: 38px;
          background-color: #4477FF;
          border-radius: 50%;
        }
        .li-detail{
          flex: 1;
          p{
            font-size: 30px;
          }
          ul{
            font-size: 26px;
            color: #999;
          }
        }
        .li-operate{
          width: 100px;
          background-color: #999;
        }
      }
    }
  }
</style>
