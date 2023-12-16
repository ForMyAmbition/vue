<template>
  <div class="top-table">
    <div class="table">功能栏</div>
    <div class="user">小明同学</div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.top-table {
  @height: 40px;
  width: 100%;
  height: @height;
  display: flex;
  justify-content: space-between;
  background-color: aqua;
  line-height: @height;
  .table {
    width: 100%;
  }
  .user {
    width: 100px;
  }
}
</style>
