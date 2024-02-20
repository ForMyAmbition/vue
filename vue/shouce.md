# 使用手册

## 接口请求部分

http.post('http://s1.com/index.php/base/index', { name: 'jack', age: 24 }, { confirm: '确定发送吗？' }).then((res) => {
const typedResponse = res as listType
console.log(typedResponse)
tableData.value = typedResponse.data.list
})
