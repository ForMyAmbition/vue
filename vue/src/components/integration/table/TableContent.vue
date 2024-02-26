<template>
  <!-- {{ props }}{{ tableData }}{{ page }} -->
  <TableSearch :column="props.config?.listConfig.column" @change="tableSearchCange" />
  <div :key="key">
    <el-button v-for="(item, index) in props.config?.listConfig.headerButtonConfig" @click="clickButton(item)" :type="item.style?.type ?? 'success'" :plain="item.style?.plain ?? false" :icon="item.style?.icon ?? ''" :key="index">{{ item.title }}</el-button>
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
      <template v-for="item in props.config?.listConfig.column" :key="item.dataIndex">
        <el-table-column :property="item.dataIndex" :label="item.title" width="120" />
      </template>
    </el-table>
    <el-config-provider :locale="zhCn">
      <el-pagination v-model:current-page="page.now_page" v-model:page-size="page.size" :page-sizes="[10, 15, 20, 40]" background layout="total, sizes, prev, pager, next, jumper" :total="page.totle" @size-change="pageChange" @current-change="pageChange" />
    </el-config-provider>
    <div style="margin-top: 20px"></div>
  </div>
</template>

<!-- let open1=() => {
  return new Promise((resolve,reject)=>{
    ElNotification({
      title: '第一步：展示模型自带动画',
      message:h(ElButton,{
        type:"primary",
        onclick:()=>resolve(20)
      },'确认'),
      duration: 0,
    })
  })
} -->
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { h, defineComponent } from 'vue'
import type { PropType } from 'vue'
import { ElTable, ElTableColumn, ElPagination, ElButton, ElNotification, ElDialog } from 'element-plus'
import type { columnType, listType } from '@/types/columnType'
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
const clickButton = (item: any) => {
  console.log(item)
  // const vnode = h('div', { class: 'hello' }, 'Hello, Vue!')
  // // 返回一个渲染函数
  // return () => vnode
  // return new Promise((resolve, reject) => {
  // return ElDialog({
  //   title: '第一步：展示模型自带动画',
  //   message: h(
  //     ElButton,
  //     {
  //       type: 'primary'
  //     },
  //     '确认'
  //   ),
  //   duration: 0
  // })
  // })
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
