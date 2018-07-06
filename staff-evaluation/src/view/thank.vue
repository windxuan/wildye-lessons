<template>
    <div class="end">
        <span>答题结束，欢迎此次答题问卷.</span>
        <router-link class="back" to="/">返回主页</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  .back {
      display: inline-block;
      padding: 15px;
      font-size: 1.5em;
      color: #666;
  }
  .end {
      width: 100%;
      height: 100%;
      position: relative;
      span{
        display: block;
        font-size: 40px;
        font-weight: 600;
        color: #666;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 550px;
        height: 100px;
        z-index: 100;
      }
  }
</style>
