<template>
    <div class="container">
      <button @click="warn('Form cannot be submit yet.',$event)">submit</button>
      <!--阻止单击事件继续传播-->
      <a href="" @click.stop="dothis($event)">链接</a>
      <!--提交事件不在重载页面-->
      <a href="" @click.prevent="dothis">链接1</a>
      <form action="" @submit.prevent>
        <input type="text">
        <button>提交</button>
      </form>
      <a href="" @click.once="dothis">链接2</a>
    </div>
</template>

<script>
  export default {
    name: 'Events',
    data() {
      return {

      }
    },
    methods:{
      warn: function (message, event) {
        if(event) event.preventDefault();
        alert(message)
      },
      dothis(event){
        event.preventDefault();
        alert('this is events');
      },
    },
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../assets/css/varible";
  .container {
    color: $text;
  pre{
    font-family: $font-family;
  }
  }
</style>
