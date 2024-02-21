<template>
  {{ props }}{{ tableData }}{{ page }}
  <div :key="key">
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
      <template v-for="item in props.config?.listConfig.column" :key="item.dataIndex">
        <el-table-column :property="item.dataIndex" :label="item.title" width="120" />
      </template>
    </el-table>
    <el-config-provider :locale="zhCn">
      <el-pagination v-model:current-page="page.currentPage" v-model:page-size="page.pageSize" :page-sizes="[10, 15, 20, 40]" background layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="pageChange" @current-change="pageChange" />
    </el-config-provider>
    <div style="margin-top: 20px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'
import type { columnType, listType } from '@/types/columnType'
import http from '@/utils/request'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const props = defineProps({
  config: Object as PropType<columnType>
})
const key = ref(0)
const page = ref({
  currentPage: 1,
  pageSize: 100
})

const pageChange = (val: number) => {
  console.log(`current page: ${val}`)
  loadData()
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()

const tableData = ref<{ [x: string]: any }[]>()
const loadData = () => {
  let params = {
    ...page.value
  }
  http.post('http://s1.com/index.php/base/index', params).then((res) => {
    const typedResponse = res as listType
    tableData.value = typedResponse.data.list
  })
}
onMounted(() => {
  loadData()
  key.value++
  console.log('页面挂载了')
})
</script>
