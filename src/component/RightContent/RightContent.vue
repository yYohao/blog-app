<template>
    <div class="right">
      <right-top></right-top>
      <right-new-text></right-new-text>
    </div>
</template>

<script>
    import RightTop from "./RightTop"
    import RightNewText from "./RightNewText"
    export default {
        name: "RightContent",
        components:{
          RightTop,RightNewText
        }
    }
</script>

<style scoped  lang="stylus" ref="stylesheet/stylus">
  .right
    width: 200px;
    height: 1000px;
    /*border: 1px solid #000;*/
    float: right;
    background-color: #000;

</style>
