<template>
    <div class="content">
      <left-content></left-content>
      <right-content></right-content>
    </div>
</template>

<script>
    import LeftContent from "./component/LeftContent/LeftContent"
    import RightContent from "./component/RightContent/RightContent"

    export default {
        name: "App",
        components:{
          LeftContent,RightContent
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .content
    width: 1000px;
    height: 1000px;
    margin: 100px auto;
    /*border: 1px solid #000;*/

</style>
