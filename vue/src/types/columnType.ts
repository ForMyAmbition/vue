interface columnItemType {
  dataIndex: string
  title: string
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
