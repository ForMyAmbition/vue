<template>
  {{ props }}{{ tableData }}
  <div :key="key">
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
      <template v-for="item in props.config?.listConfig.column" :key="item.dataIndex">
        <el-table-column :property="item.dataIndex" :label="item.title" width="120" />
      </template>
    </el-table>
    <el-config-provider :locale="zhCn">
      <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]" background layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
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

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  // console.log(`current page: ${val}`)
  loadData()
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()

const tableData = ref<{ [x: string]: any }[]>()
const loadData = () => {
  http.post('http://s1.com/index.php/base/index', { name: 'jack', age: 24 }, { confirm: '确定发送吗？' }).then((res) => {
    const typedResponse = res as listType
    console.log(typedResponse)
    tableData.value = typedResponse.data.list
  })
}
onMounted(() => {
  loadData()
  key.value++
  console.log('页面挂载了')
})
</script>
