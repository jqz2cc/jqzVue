<template>
    <div class="container">
      <input type="number" step="20">
      <h1>{{blogTitle}}</h1>
      <div class="sub-title">JavaScript代替模板功能</div>
      <ul v-if="items.length">
        <li v-for="item in items">{{item.name}}</li>
      </ul>
      <p v-else>No items found.</p>
    </div>
</template>

<script>
export default {
  name: 'Transition',
  data() {
    return {
      show: true,
      blogTitle: '人生几何春已夏',
      items: [
        {
          name: 'chengzi',
        },
      ]
    }
  },
  // render(createElement) {
  //   if (this.items.length) {
  //     return createElement('ul', this.items.map(function (item) {
  //       return createElement('li', item.name)
  //     }))
  //   } else {
  //     return createElement('p','No items found.')
  //   }
  // },
  methods: {
    isShow() {
      this.show = !this.show;
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
  .sub-title{
    font-size: 20px;
    font-weight: 700;
    position: relative;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  &:before{
     content: '';
     display: inline-block;
     position: absolute;
     left: 0;
     top: 0;
     width: 3px;
     height: 100%;
     background-color: $primary;
   }
  }
  }

  /*过渡*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }/* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

</style>
