<template>
    <div class="container">
      <input type="text" v-model="message" placeholder="edit me">
      <p>message is : {{message}}</p>
      <!--多行文本-->
      <span>Multiline message is:</span>
      <p style="white-space: pre-line">{{message1}}</p>
      <br>
      <textarea v-model="message1" placeholder="add multiple lines" name="" id="" cols="30" rows="10"></textarea>
      <!--复选框-->
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
      <div class="sub-title">多选框</div>
      <div class="example">
        <input type="checkbox" id="Jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="Mick" value="Mick" v-model="checkedNames">
        <label for="mick">Mick</label>
        <br>
        <span>checked names: {{checkedNames}}</span>
        <!--单选按钮-->
        <div class="sub-title">单选按钮</div>
        <input type="radio" id="one" value="one" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked:{{picked}}</span>
        <!--选择框-->
        <div class="sub-title">单选时</div>
        <select name="" v-model="selected">
          <option value="" disabled>请选择</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <span>Selected: {{selected}}</span>
        <div class="sub-title">多选时</div>
        <select name="" v-model="selected1" multiple style="width: 50px">
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
        <br>
        <span>Selected: {{selected1}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Input',
    data() {
      return {
        message: '',
        message1: '',
        checked: Boolean,
        checkedNames:[ ],
        picked: '',
        selected: '',
        selected1: [ ],
      }
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
</style>
