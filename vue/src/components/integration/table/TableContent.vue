<!--  -->
<template>
  <div ref="tableContentRef"></div>
</template>

<script setup lang="ts">
import { ref, h, render, onMounted } from 'vue'
import TryView from '@/views/workbench/TryView.vue'

const tableContentRef = ref()
const createDom = () => {
  render(h(TryView), tableContentRef.value)
}

// onMounted(() => {
//   createDom()
// })
</script>
<style lang="less" scoped></style>
