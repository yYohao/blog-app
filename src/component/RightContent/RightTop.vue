<template>
    <div class="top">
      <img class="photo" src="../../../static/images/photo.jpg" width="100" alt="">
      <div class="contact">
        <div class="github">
          <a href="https://github.com/yYohao">
            <img @mouseover="changeColor('github')" @mouseout="changeColor('github')"  :src="github[0]" width="30" alt="" title="github">
          </a>
        </div>
        <div class="csdn">
          <a href="https://blog.csdn.net/y429747705">
            <img @mouseover="changeColor('csdn')" @mouseout="changeColor('csdn')"  :src="csdn[0]" width="30" alt="" title="csdn">
          </a>
        </div>
        <div class="resume">
          <a href="">
            <img  @mouseover="changeColor('resume')" @mouseout="changeColor('resume')"  :src="resume[0]" width="30" alt="" title="简历">
          </a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RightTop",
        data(){
          return{
            github:["../../../static/images/github.png","../../../static/images/githubed.png"],
            csdn:["../../../static/images/csdn.png","../../../static/images/csdned.png"],
            resume:["../../../static/images/resume.png","../../../static/images/resumed.png"],
          }
        },
        methods:{
          changeColor(type){
            if (type === "github"){
              this.github.push(this.github.shift());
            }else if (type === "csdn") {
              this.csdn.push(this.csdn.shift());
            }else if (type === "resume") {
              this.resume.push(this.resume.shift());
            }
          }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.top
  width 200px
  height 300px
  padding-top 50px
  border: 1px solid #fff
  .photo
    display block
    margin 50px auto
    border-radius 50%
    cursor pointer
  .contact
    width 100%
    height 60px
    /*border: 1px solid #fff*/
    .github, .csdn, .resume
      width 60px
      height: 60px
      /*border: 1px solid #fff*/
      float left
      margin-left 5px
      cursor pointer
      img
        margin 20px 15px
</style>
