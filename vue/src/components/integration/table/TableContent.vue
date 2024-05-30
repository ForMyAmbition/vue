<template>
  <!-- <el-button @click="show.showDialog = true">21323</el-button> -->
  <TableSearch :column="props.config?.listConfig.column" @change="tableSearchCange" />
  <div :key="key">
    <el-button v-for="(item, index) in props.config?.listConfig.headerButtonConfig" @click="clickButton(item, {})" :type="item.style?.type ?? 'success'" :plain="item.style?.plain ?? false" :icon="item.style?.icon ?? ''" :key="index">{{ item.title }}</el-button>
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
      <template v-for="item in props.config?.listConfig.column" :key="item.dataIndex">
        <!-- <el-table-column :property="item.dataIndex" :label="item.title" width="120" /> -->
        <el-table-column :label="item.title" width="180">
          <template #default="scope">
            <component v-if="item.replace" :is="item.replace(item, scope.row)"></component>
            <div v-else>{{ scope.row[item.dataIndex] }}</div>
          </template>
        </el-table-column>
      </template>
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button v-for="(item, index) in props.config?.listConfig.columnButtonConfig" :key="index" link type="primary" size="small" @click="clickButton(item, scope)">Detail</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-config-provider :locale="zhCn">
      <el-pagination v-model:current-page="page.now_page" v-model:page-size="page.size" :page-sizes="[10, 15, 20, 40]" background layout="total, sizes, prev, pager, next, jumper" :total="page.totle" @size-change="pageChange" @current-change="pageChange" />
    </el-config-provider>
    <div style="margin-top: 20px"></div>
  </div>
  <el-dialog v-model:model-value="show.showDialog">
    <div ref="tableDialogRef"></div>
  </el-dialog>
  <el-drawer v-model:model-value="show.showDrawer" title="I am the title" :with-header="false" :size="show.config.size">
    <div ref="tableDrawerRef"></div>
  </el-drawer>
</template>
<script lang="tsx" setup>
const renderDemo = (msg: string) => (
  <div class="wrapper">
    <div class="inner"> msg is {msg}</div>
  </div>
)
import { ref, onMounted, reactive } from 'vue'
import { h, defineComponent, render } from 'vue'
import type { PropType } from 'vue'
import { ElTable } from 'element-plus'
import type { columnType, listType, headerTopButtonType } from '@/types/columnType'
import http from '@/utils/request'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import TableSearch from './TableSearch.vue'
const props = defineProps({
  config: Object as PropType<columnType>
})
/* ----------------------------------- 分页 ----------------------------------- */
const key = ref(0)
const page = ref({
  page: 0,
  size: 10,
  now_page: 1,
  last_page: 0,
  totle: 0
})

const pageChange = (val: number) => {
  console.log(`current page: ${val}`)
  loadData()
}

/* ----------------------------------- 弹窗 ----------------------------------- */
const show = reactive({ showDialog: false, showDrawer: false, config: {} as headerTopButtonType })

const reconstructImportFunction = (importString: Function) => {
  // 这里使用 new Function 是不安全的，因为它可以执行任意代码
  // 仅在了解潜在风险的情况下使用此方法
  const importFunction = new Function(`return ${importString}`)()
  return importFunction
}
const tableDialogRef = ref<any>(null)
const tableDrawerRef = ref<any>(null)
const clickButton = async (item: headerTopButtonType, { row }: { row?: Record<string, any> }) => {
  console.log(row)
  // show.showDialog = true
  // show.showDrawer = true
  // 尝试重新构造导入函数

  if (item.drawer) {
    show.showDrawer = true
  } else {
    show.showDialog = true
  }
  show.config = item
  // show.showDialog = true
  const importFunction = reconstructImportFunction(item.module)
  const module = await importFunction()
  const component = module.default
  let son = null
  if (item.drawer) {
    son = tableDrawerRef.value
    // console.log('🚀 ~ clickButton ~ son:', son)
    // let obj = document.getElementById('tableDrawerRef') as HTMLElement
    // console.log('🚀 ~ clickButton ~ obj:', obj)
  } else {
    son = tableDialogRef.value
    // son = document.getElementById('tableDialogRef') as HTMLElement
  }

  console.log('🚀 ~ clickButton ~ son:', son)
  render(
    h(component, {
      onClose: () => {
        console.log('dianjile')
      }
    }),
    son
  )
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()

/* ------------------------------- 筛选条件汇集统一请求 ------------------------------- */
const tableSearchCange = (tableSearchCondition: Object) => {
  console.log('🚀 ~ tableSearchCange ~ tableSearchCondition:', tableSearchCondition)
}
/* ---------------------------------- 请求数据 ---------------------------------- */
const tableData = ref<{ [x: string]: any }[]>()
const loadData = () => {
  let params = {
    ...page.value
  }
  http.post('http://s1.com/index.php/base/index', params).then((res) => {
    const typedResponse = res as listType
    if (typedResponse.list) {
      tableData.value = typedResponse.list?.data
      let pageData = (({ page, size, now_page, last_page, totle }) => ({ page, size, now_page, last_page, totle }))(typedResponse.list)
      page.value = { ...pageData }
    }
  })
}
onMounted(() => {
  loadData()
  key.value++
  console.log('页面挂载了')
})
</script>
