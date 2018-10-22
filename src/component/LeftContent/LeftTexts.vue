<template>
    <div class="texts">
      <ul>
        <li class="text-item">
          <div class="item-title">{{texts.title}}</div>
          <div class="item-content">{{texts.content}}</div>
          <div class="item-bottom">
            <div class="write-date">2019-10-09 18:00:00</div>
            <span class="marks"><img src="../../../static/images/good.png" width="20" alt="">
              点赞
            </span>
            <span class="marks"><img src="../../../static/images/good.png" width="20" alt="">
              评论
            </span>
          </div>
        </li>
        <li class="text-item">
          <div class="item-title">{{texts.title}}</div>
          <div class="item-content">{{texts.content}}</div>
          <div class="item-bottom">
            <div class="write-date">2019-10-09 18:00:00</div>
            <span class="marks"><img src="../../../static/images/good.png" width="20" alt="">
              点赞
            </span>
            <span class="marks"><img src="../../../static/images/good.png" width="20" alt="">
              评论
            </span>
          </div>
        </li>
        <li class="text-item">
          <div class="item-title">{{texts.title}}</div>
          <div class="item-content">{{texts.content}}</div>
          <div class="item-bottom">
            <div class="write-date">2019-10-09 18:00:00</div>
            <span class="marks"><img src="../../../static/images/good.png" width="20" alt="">
              点赞
            </span>
            <span class="marks"><img src="../../../static/images/good.png" width="20" alt="">
              评论
            </span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "LeftTexts",
        computed:{
          ...mapState(['texts'])
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.texts
  width 100%
  height 70%
  /*border: 1px solid #000*/
  margin-top 20px
  padding 0
  ul
    list-style none
    .text-item
      width 100%
      height 160px
      margin 20px 0
      /*border: 1px solid #000*/
      .item-title
        width 98%
        height 40px
        /*border: 1px solid #000*/
        font-size 21px
        font-weight bolder
        line-height 40px
        padding-left 10px
      .item-content
        width 95%
        height 20px
        /*border: 1px solid #000*/
        padding 30px 0
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        padding-left 15px
      .item-bottom
        width 92%
        height 40px
        /*border: 1px solid #000*/
        padding-left 20px
        background-color: #eee
        .write-date
          width 200px
          float left
          margin-right 200px
          line-height 40px
          text-align center
        .marks
          display inline-block
          width 90px
          height 40px
          line-height 40px
          text-align center
          /*border: 1px solid #000*/
          padding-left 10px
          position relative
          img
            position absolute
            left 10px
            top 10px
</style>
