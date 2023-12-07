<!--  -->
<template>
  <el-sub-menu>
    <template v-for="(item, index) in props.menuChildren" :key="index">
      <MenuSub v-if="item.children.length"></MenuSub>
      <el-menu-item v-else></el-menu-item>
    </template>
  </el-sub-menu>
</template>

<script setup lang="ts">
// import { PropsType } from './type';
// import MenuItem from './MenuItem.vue'

const props = defineProps({
  menuChildren: {
    type: Array<typeProps>,
    default: []
  }
})

interface typeProps {
  title: String
  children: Array<typeProps>
  path: String
}
</script>
<style lang="less" scoped></style>
