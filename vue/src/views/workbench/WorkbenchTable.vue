<template>
  <div>工作台</div>
  <div ref="tableContentRef" id="tableContentRef"></div>
</template>

<script setup lang="ts">
import TableTs from '@/tableTs/tableTs'
import { ref, h, render, onMounted } from 'vue'
import type { columnType } from '@/types/columnType'
import ComEdit from './edit/ComEdit.vue'
const tableContentRef = ref()

const config: columnType = {
  listConfig: {
    url: '',
    headerButtonConfig: [
      {
        title: '顶部',
        module: () => import('./edit/ComEdit.vue'),
        style: {
          type: 'primary',
          plain: true
        }
      }
    ],
    column: [
      {
        dataIndex: 'name',
        title: '姓名',
        search: true,
        searchConfig: {
          searchIndex: 'names',
          searchTitle: '名字',
          type: 'input'
        }
      },
      {
        dataIndex: 'age',
        title: '年龄',
        search: true,
        searchConfig: {
          searchIndex: 'ages',
          searchTitle: '年纪',
          type: 'input'
        }
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
