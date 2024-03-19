<!--  -->
<template>
  <div v-if="searchList.length" class="search-content">
    <template v-for="item in searchList">
      <template v-if="item.type">
        <div :key="item.index" class="search-content-item">
          <div class="search-content-item-title">{{ item.title }}</div>
          <el-input v-model="searchCondition[item.index]" />
        </div>
      </template>
    </template>
    <div>
      <el-button type="primary" @click="emits('change', searchCondition)">确认</el-button>
      <el-button @click="emits('change', {})">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
/* -------------------------------------------------------------------------- */
/*              搜索部分 归纳觉在组件内处理需要的数据更方便后期拓展               */
/* -------------------------------------------------------------------------- */
import type { PropType } from 'vue'
import { ref } from 'vue'
import type { columnType, listType, columnItemType, searchListType } from '@/types/columnType'
const props = defineProps({
  column: Array as PropType<columnItemType[]>
})
const searchCondition = ref<{ [x: string]: any }>({})
/* ------------------------------- 处理成需要的格式再循环 ------------------------------ */

const searchList = ref<searchListType[]>([])
props.column?.map((columnItem) => {
  if (columnItem.search) {
    searchList.value.push({
      title: columnItem.searchConfig?.searchTitle ?? columnItem.title,
      index: columnItem.searchConfig?.searchIndex ?? columnItem.dataIndex,
      type: columnItem.searchConfig?.type ?? 'input'
    })
  }
})
console.log('🚀 ~ searchList:', searchList)
const emits = defineEmits<{
  change: [{ [x: string]: any }]
}>()
</script>
<style lang="less" scoped>
.search-content {
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 220px);
  grid-gap: 10px 20px;
  grid-auto-rows: 30px;
  &-item {
    display: grid;
    grid-template-columns: auto 1fr;
    &-title {
      font-size: 20px;
      line-height: 30px;
      margin-right: 5px;
    }
  }
  //   justify-content: center;
  align-content: center;
}
</style>
