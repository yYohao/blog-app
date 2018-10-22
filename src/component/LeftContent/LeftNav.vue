<template>
    <div class="left-nav">
      <ul class="nav">
        <li class="current"><a href="">技术博客</a></li>
        <li><a href="">HTML</a></li>
        <li><a href="">CSS</a></li>
        <li><a href="">JS</a></li>
        <li><a href="">Vue</a></li>
        <li><a href="">Node</a></li>
        <li><a href="">插件</a></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "LeftNav"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.left-nav
  width 100%
  height 50px
  background-color #333
  margin-left -30px
  padding 0 30px
  .nav
    list-style none
    li
      display inline-block
      height 100%
      padding 0 15px
      line-height 50px
      cursor pointer
      a
        color #fff
        text-decoration none
    li:hover
      background-color: #e41637
    .current
      background-color: #e41637
</style>
