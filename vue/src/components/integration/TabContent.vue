<template>
  <el-button type="primary" @click="click">添加页面</el-button>
  <el-tabs v-model="editableTabsValue" ref="elTab" type="card" class="demo-tabs" editable @edit="handleTabsEdit">
    <!-- <template #addIcon>
      <el-icon><Select /></el-icon>
    </template> -->
    <el-tab-pane v-for="item in editableTabs" ref="elTab" :key="item.name" :label="item.title" :name="item.name">
      <div>{{ item.name }}</div>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref, h, render } from 'vue'
import { Select } from '@element-plus/icons-vue'
import type { TabPaneName } from 'element-plus'
import { ElTabPane } from 'element-plus'
import WorkbenchTable from '@/views/workbench/WorkbenchTable.vue'
let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  }
])
const elTab = ref()

const click = () => {
  const newElement = document.createElement('p')
  newElement.textContent = '这是一个新元素'

  // 将新元素添加到ref引用的DOM元素中
  // container.value.appendChild(newElement);\
  render(h(WorkbenchTable, {}), elTab.value[elTab.value.length - 1].$el)
  // .appendChild(WorkbenchTable)
  // console.log('🚀 ~ elTab:', elTab.value[elTab.value.length - 1].value)
}
const handleTabsEdit = (targetName: TabPaneName | undefined, action: 'remove' | 'add') => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content'
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
