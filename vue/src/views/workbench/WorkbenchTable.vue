<template>
  <div>工作台</div>
  <div ref="tableContentRef" id="tableContentRef"></div>
</template>

<script setup lang="ts">
import TableTs from '@/tableTs/tableTs'
import { ref, h, render, onMounted } from 'vue'
const tableContentRef = ref()

const config = {
  listConfig: {
    url: '',
    column: [
      {
        dataIndex: 'name',
        title: '姓名'
      }
    ]
  }
}

onMounted(() => {
  TableTs(tableContentRef.value, config)
})
</script>
<style lang="less" scoped>
#tableContentRef {
  height: 500px;
}
</style>
