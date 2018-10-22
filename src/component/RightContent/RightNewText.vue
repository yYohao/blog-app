<template>
    <div class="new-text">
      <div class="title">最新文章</div>
    </div>
</template>

<script>
    export default {
        name: "RightNewText"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.new-text
  width 100%
  height 300px
  border: 1px solid #fff
  .title
    height 20px
    width 100px
    background-color #75e74a
    margin-top 10px
    position relative
    padding-left 20px
    font-weight lighter
    font-weight 14px
    color #fff
    text-shadow 1px 1px 1px #333
  .title:after
    content ''
    width 0
    height 0
    border 10px solid transparent
    border-left-color #75e74a
    position absolute
    left 100%
    top 50%
    margin-top -10px
  .title:before
    content ''
    width 0
    height 0
    border 10px solid #75e74a
    border-left 10px solid transparent
    position absolute
    left -10px
    top 50%
    margin-top -10px
</style>
