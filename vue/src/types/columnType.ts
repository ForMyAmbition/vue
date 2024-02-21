interface columnItemType {
  dataIndex: string
  title: string
  search?: boolean
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
