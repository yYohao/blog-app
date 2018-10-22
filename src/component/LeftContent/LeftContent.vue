<template>
    <div class="left">
        <div class="title">MadPig</div>
        <!-- 导航 -->
        <left-nav></left-nav>
        <!-- 内容 -->
        <left-texts></left-texts>
    </div>
</template>

<script>
    import LeftNav from "./LeftNav"
    import LeftTexts from "./LeftTexts"
    export default {
        name: "LeftContent",
        components:{
          LeftNav,LeftTexts
        },
        mounted(){
          this.$store.dispatch("reqText");
        },


    }
</script>

<style scoped  lang="stylus" ref="stylesheet/stylus">
  .left
    width: 720px;
    height: 960px;
    /*border: 1px solid red;*/
    float: left;
    background-color: #fff;
    padding: 20px;
    .title
      width: 100%
      height: 80px
</style>
