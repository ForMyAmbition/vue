<!--  -->
<template>
  <!-- 左侧菜单 -->
  <div class="table-content">
    <div class="menu-left">
      <div class="menu-left-logo">logo</div>
      <MenuLeft></MenuLeft>
    </div>
  </div>
</template>
<script setup lang="ts">
import MenuLeft from './integration/MenuLeft.vue'
</script>
<style lang="less" scoped>
.table-content {
  width: 100%;
  height: 100%;

  .menu-left {
    height: 100%;
    background-color: white;
    &-logo {
      height: 150px;
      width: 100%;
    }
    width: 300px;
  }
}
</style>
