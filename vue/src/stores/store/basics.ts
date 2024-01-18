import type { Basice } from '@/types/basics'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'basice',
  () => {
    // 用户信息
    const basice = ref()
    // 设置用户，登录后使用
    const setUser = (u: Basice) => {
      basice.value = u
    }
    // 清空用户，退出后使用
    const delUser = () => {
      basice.value = undefined
    }
    return { basice, setUser, delUser }
  },
  {
    persist: true // 开启持久化
  }
)
