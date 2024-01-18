import TableContentVue from '@/components/integration/table/TableContent.vue'

import { ref, h, render } from 'vue'
import { inject } from 'vue'
const createDom = (domRef: HTMLElement) => {
  console.log(inject('http'))
  inject('http').post('http://s1.com', { name: 'jack', age: 24 }, { confirm: '确定发送吗？' })
  const son = document.getElementById('tableContentRef') as HTMLElement
  console.log('🚀 ~ file: TableTs.ts:28 ~ createDom ~ domRef:', domRef)
  render(h(TableContentVue), son)
}

export default createDom
