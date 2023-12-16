<template>
  <el-sub-menu :index="props.menuChildren.path" v-if="props.menuChildren.children">
    <template #title>
      <el-icon><component :is="props.menuChildren.icon" /></el-icon>
      <span>{{ props.menuChildren.title }}</span>
    </template>
    <template v-for="(item, index) in props.menuChildren.children" :key="index">
      <MenuSub v-if="item.children" :menuChildren="item"></MenuSub>
      <el-menu-item v-else :index="item.path">
        <el-icon><component :is="item.icon" /></el-icon>
        {{ item.title }}
      </el-menu-item>
    </template>
  </el-sub-menu>
  <el-menu-item v-else>
    <el-icon><component :is="props.menuChildren.icon" /></el-icon>
    {{ props.menuChildren.title }}
  </el-menu-item>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { typePropsMenu } from '../MenuLeft.vue'
const props = defineProps({
  menuChildren: {
    type: Object as PropType<typePropsMenu>,
    required: true,
    default: () => ({ icon: '' })
  }
})
</script>
<style lang="less" scoped></style>
