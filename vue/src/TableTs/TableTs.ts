import TableContentVue from '@/components/integration/table/TableContent.vue'
import type { requestType } from '@/types/requestType'
import type { columnType } from '@/types/columnType'
import { ref, h, render } from 'vue'
import { inject } from 'vue'
const createDom = (domRef: HTMLElement, config: columnType) => {
  // inject<requestType>('http')!.post('http://s1.com/index.php/base/index', { name: 'jack', age: 24 }, { confirm: '确定发送吗？' })
  const son = document.getElementById('tableContentRef') as HTMLElement
  render(h(TableContentVue, { config }), domRef)
}

export default createDom
