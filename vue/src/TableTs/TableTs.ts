// const createTableDom = () => {

// }
// export default createTableDom

//useCounter.js
import { ref, h, render } from 'vue'
import TryView from '@/views/workbench/TryView.vue'
export default function () {
  // const tableContentRef = ref()
  // console.log('🚀 ~ file: TableTs.ts:11 ~ tableContentRef:', tableContentRef)
  const createDom = () => {
    const son = document.getElementById('tableContentRef') as HTMLElement
    //把容器插入到指定的位置
    // document.querySelector('.home-box').insertBefore(son,document.querySelector('.home-box').firstChild)
    render(h(TryView), son)
  }

  return {
    createDom
  }
}
