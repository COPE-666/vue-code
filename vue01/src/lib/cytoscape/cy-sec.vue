<template>
    <div id="cy"></div>
</template>
<script>
    export default {
        mounted() {
            this.$cytoscape({
              container: document.getElementById('cy'),
              style: [
                { selector: 'node[label = "Person"]', 
                // data(name) 是函数，表示label取对应节点的name属性值
                  css: {'background-color': '#6FB1FC', 'content': 'data(name)'}
                },
                { selector: 'node[label = "Movie"]', 
                  css: {'background-color': '#F5A45D', 'content': 'data(title)'}
                },
                { selector: 'edge', 
                 // target-arrow-shape - triangle 箭头样式 - 三角形箭头
                  css: {'content': 'data(relationship)', 'target-arrow-shape': 'triangle'}
                }        
              ],
              elements: {
                nodes: [
                  {data: {id: '172', name: 'Tom Cruise', label: 'Person'}}, // id必填
                  {data: {id: '183', title: 'Top Gun', label: 'Movie'}}
                ],
                // source 开始节点的id值
                // relationship 节点间关系
                edges: [{data: {source: '172', target: '183', relationship: 'Acted_In'}}]
              },
              // layout布局网络图里的节点显示的位置。
              // 你可以选择不同类型的layout把整个网络显示成树形，圆形，网格，力导向图等等。我们随便选了一个’grid’网格布局。
              layout: { name: 'grid'} 
            })
        },
    }
</script>

<style scoped>
#cy{
    height: 500px;
    width: 400px;
    background-color: #f9f9f9;
}
</style>