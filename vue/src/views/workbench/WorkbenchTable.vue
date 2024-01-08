<template>
  <div>工作台</div>
  <div ref="tableContentRef" id="tableContentRef"></div>
</template>

<script setup lang="ts">
import TableTs from '@/TableTs/TableTs'
import { ref, h, render, onMounted } from 'vue'
const { createDom } = TableTs()
const tableContentRef = ref()
createDom()
console.log('🚀 ~ file: WorkbenchTable.vue:10 ~ createDom:', createDom)
</script>
<style lang="less" scoped></style>
