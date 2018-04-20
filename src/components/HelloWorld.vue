<template>
  <div class="hello">
    <pre>
      {{ msg }}
      # 先安装依赖
      npm install

      # 热加载 localhost:8080
      npm run dev

      # 上线打包
      npm run build

      # 上线打包，并显示打包的详细内容
      npm run build --report
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
  .hello {
    color: $text;
    pre{
      font-family: $font-family;
    }
  }
</style>
