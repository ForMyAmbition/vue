import type { EpPropMergeType } from 'element-plus/es/utils/index.mjs'
export interface columnItemType {
  dataIndex: string
  title: string
  search?: boolean
  searchConfig?: {
    searchIndex?: string
    searchTitle?: string | any
    type?: 'input' | 'select'
  }
}
export interface headerTopButtonType {
  title: string
  module: Function
  style?: {
    type?: EpPropMergeType<StringConstructor, '' | 'default' | 'text' | 'success' | 'warning' | 'info' | 'primary' | 'danger', unknown>
    plain?: boolean
    icon?: string
  }
}
export interface columnType {
  listConfig: {
    url: string
    column: columnItemType[]
    headerButtonConfig?: headerTopButtonType[]
  }
}

export interface listType {
  list?: {
    data: { [x: string]: any }[]
    page: number
    size: number
    now_page: number
    last_page: number
    totle: number
  }
  obj?: Object
}
export interface searchListType {
  title: string
  index: string
  type: string
}
