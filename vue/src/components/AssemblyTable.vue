<!--  -->
<template>
  <!-- 左侧菜单 -->
  <div class="table-content">
    <div class="menu-left">
      <div class="menu-left-logo">logo</div>
      <MenuLeft></MenuLeft>
    </div>
    <!-- 右侧顶部 -->
    <div class="realistic-whole">
      <TopTable></TopTable>
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MenuLeft from './integration/MenuLeft.vue'
import TopTable from './integration/top/TopTable.vue'
</script>
<style lang="less" scoped>
.table-content {
  width: 100%;
  height: 100%;
  display: flex;

  .menu-left {
    height: 100%;
    background-color: white;
    &-logo {
      height: 150px;
      width: 100%;
    }
    width: 300px;
  }
  .realistic-whole {
    width: 100%;
    // background-color: azure;
  }
}
</style>
