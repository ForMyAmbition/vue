<template>
  {{ props }}{{ tableData }}
  <div :key="key">
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
      <template v-for="item in props.config?.listConfig.column" :key="item.dataIndex">
        <el-table-column :property="item.dataIndex" :label="item.title" width="120" />
      </template>
    </el-table>
    <div style="margin-top: 20px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'
import type { columnType, listType } from '@/types/columnType'
import { inject } from 'vue'
import type { requestType } from '@/types/requestType'
import http from '@/utils/request'
const props = defineProps({
  config: Object as PropType<columnType>
})
interface User {
  date: string
  name: string
  address: string
}
const key = ref(0)

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

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
