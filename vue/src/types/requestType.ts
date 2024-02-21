export interface requestType {
  post(url: string, params: any, content?: Object | undefined): Promise<any>
}
