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
export interface columnType {
  listConfig: {
    url: string
    column: columnItemType[]
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
