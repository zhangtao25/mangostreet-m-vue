<template>
<!--  该组件顶层元素为input，所以该组件适用input的所有属性-->
  <input @input="emitInputVal" :value="handleVal">
</template>
<script>
  export default {
    props:['value'],
    model: {
      prop: 'value',
      event: 'input'
    },
    computed:{
      handleVal(){
        // 处理prop传入的数值四位一空格
        return this.value?this.fourNumOneSpace(this.value):this.value;
      }
    },
    methods:{
      emitInputVal:function(e){
        // 控制显示的数值四位一空格
        e.target.value = this.fourNumOneSpace(e.target.value);
        // 去除输出数值的空格
        this.$emit('input',e.target.value.replace(/\s/g,''));
      },
      fourNumOneSpace:function (num) {
        return num.replace(/\s/g,'').replace(/[^\d]/g,'').replace(/(\d{4})(?=\d)/g,'$1 ');
      }
    }
  }
</script>
