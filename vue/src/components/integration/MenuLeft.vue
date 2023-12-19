<template>
  <el-row class="tac">
    <el-col>
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
        <template v-for="(item, index) in menu" :key="index">
          <menu-sub v-if="item.children" :menuChildren="item"></menu-sub>
          <el-menu-item v-else>
            <el-icon><component :is="item.icon" /></el-icon>
            {{ item.title }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
/* -------------------------------- 使用递归生成菜单 -------------------------------- */
// import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import MenuSub from './menu/MenuSub.vue'
import { useRouter, type RouteLocationRaw } from 'vue-router'
import { reactive } from 'vue'

export interface typePropsMenu {
  title: String
  children?: Array<typePropsMenu>
  path: RouteLocationRaw
  icon?: String
}
let menu = reactive<typePropsMenu[]>([
  {
    title: '一级',
    path: '234s234',
    icon: 'DocumentCopy',
    children: [
      {
        title: '二级',
        path: '234234'
      },
      {
        title: '二级',
        path: '234s2e34',
        icon: 'DocumentCopy'
      },
      {
        title: '一级的二级',
        icon: 'Expand',
        path: '23423t4',
        children: [
          {
            title: '一级的san级',
            path: '/workbench'
          }
        ]
      }
    ]
  },
  {
    title: '二级',
    path: '234234',
    icon: 'Expand'
  }
])

onMounted(() => {
  let roueter = useRouter()
  console.log(roueter.options.routes)
})

const handleOpen = () => {}
const handleClose = () => {}
</script>

<style lang="less" scoped></style>
