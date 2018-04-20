<template>
<div class="container">
  <p>origin message: {{message}}</p>
  <p>computed reversed message: {{reverseMessage}} </p>
  <p>Now {{now}} </p>
  <!--watch-->
  <p>{{fullName}}</p>
  <p>{{firstName}}</p>
  <p>{{lastName}}</p>
</div>
</template>

<script>
  export default {
    name: 'Test',
    data(){
      return {
        message: 'hello',
        firstName: 'Foo',
        lastName: 'bar',
        fullName: 'cao cheng'
      }
    },
    computed: {
      reverseMessage: function () {
        return this.message.split('').reverse().join('');
      },
      now() {
        return Date.now();
      },
      fullName: {
        // return this.firstName + ' ' +this.lastName;
      //  setter
        get(){
          return this.firstName + ' ' +this.lastName;
        },
        set(newValue) {
          let names = newValue.split('');
          this.firstName = names[0];
          this.lastName = names[names.length - 1]
        },
      },
    },
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "../assets/css/varible";
  .container {
    color: $text;
  pre{
    font-family: $font-family;
  }
  }
</style>
