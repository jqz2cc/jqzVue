<template>
  <div class="container">
    <pre>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '创建成功，开启开发之旅!',
    };
  },
};
</script>

<style lang="scss" scoped type="text/scss">
  @import "../assets/css/varible";
  .container {
    color: $text;
    pre{
      font-family: $font-family;
    }
  }
</style>
