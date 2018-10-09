<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc,index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>
<script>
  // 类名常量
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'
  export default {
    props: {
      score: Number,
      size: Number
    },
    computed: {
      /*
      3.2: 3+0+2
      3.5: 3+1+1
      */
      starClasses () {
        const {score} = this
        const scs = []
        // 在数组scs添加n个'on'
        const scoreInt = Math.floor(score)
        for(let i = 0; i < scoreInt;i++) {
          scs.push(CLASS_ON)
        }
        // 在数组scs添加0或1个'half'
        if ((score - scoreInt)*10 >= 5) { // 不精确所以乘10，大于5，原来只要大于0.5
          scs.push(CLASS_HALF)
        }
        // 在数组scs添加n个'off'
        while(scs.length<5) { // 数组不满5自动补
          scs.push(CLASS_OFF)
        }
        return scs
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
