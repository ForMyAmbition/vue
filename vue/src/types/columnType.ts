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
  data: {
    list: { [x: string]: any }[]
  }
}
export interface searchListType {
  title: string
  index: string
  type: string
}
