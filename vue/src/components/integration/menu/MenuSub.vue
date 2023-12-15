<template>
  <el-sub-menu :index="props.menuChildren.path" v-if="props.menuChildren.children">
    <template #title>
      <el-icon><location /></el-icon>
      <span>{{ props.menuChildren.title }}</span>
    </template>
    <template v-for="(item, index) in props.menuChildren.children" :key="index">
      <MenuSub v-if="item.children" :menuChildren="item"> </MenuSub>
      <el-menu-item v-else :index="item.path"
        ><el-icon><location /></el-icon>{{ item.title }}</el-menu-item
      >
    </template>
  </el-sub-menu>
  <el-menu-item v-else
    ><el-icon><location /></el-icon> {{ props.menuChildren.title }}</el-menu-item
  >
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
const props = defineProps({
  menuChildren: {
    type: Object as PropType<typeProps>,
    required: true
  }
})

interface typeProps {
  title: String
  children?: Array<typeProps>
  path: String
}
</script>
<style lang="less" scoped></style>
