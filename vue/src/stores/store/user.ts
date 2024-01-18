// import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'cp-user',
  () => {
    // 用户信息
    const user = ref()
    // 设置用户，登录后使用
    const setUser = (u: any) => {
      user.value = u
    }
    // 清空用户，退出后使用
    const delUser = () => {
      user.value = undefined
    }
    return { user, setUser, delUser }
  },
  {
    persist: true // 开启持久化
  }
)
