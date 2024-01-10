<template>
  <div>工作台</div>
  <div ref="tableContentRef" id="tableContentRef"></div>
</template>

<script setup lang="ts">
import TableTs from '@/TableTs/TableTs'
import { ref, h, render, onMounted } from 'vue'
const tableContentRef = ref()

onMounted(() => {
  TableTs(tableContentRef.value)
})
</script>
<style lang="less" scoped>
#tableContentRef {
  height: 500px;
}
</style>
