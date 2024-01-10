import TableContentVue from '@/components/integration/table/TableContent.vue'

import { ref, h, render } from 'vue'
const createDom = (domRef: HTMLElement) => {
  const son = document.getElementById('tableContentRef') as HTMLElement
  console.log('🚀 ~ file: TableTs.ts:28 ~ createDom ~ domRef:', domRef)
  render(h(TableContentVue), son)
}

export default createDom
