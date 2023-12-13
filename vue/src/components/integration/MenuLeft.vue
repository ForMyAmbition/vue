<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="(item, index) in menu" :key="index">
          <menu-sub v-if="item.children" :menuChildren="item"></menu-sub>
          <el-menu-item v-else>{{ item.title }}</el-menu-item>
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
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

let menu = reactive([
  {
    title: '一级',
    path: '234s234',
    children: [
      {
        title: '一级的二级',
        path: '234234',
        children: [
          {
            title: '一级的san级',
            path: '23423sd4'
          }
        ]
      }
    ]
  },
  {
    title: '二级',
    path: '234234'
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
