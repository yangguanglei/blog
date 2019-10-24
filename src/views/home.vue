<style scoped lang="less">

</style>

<template>
  <div id="abc" @click="handleClick()">jquery test</div>
</template>

<script>
  import $ from 'jquery';
  export default {
    name: "home",
    methods:{
      handleClick(){
        $('#abc').text('lalalalalalala');
      }
    }
  };
</script>
