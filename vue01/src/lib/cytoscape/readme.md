neo4j有三个概念：图(Graph)，节点(Node)和关系(Relationship)。
cytoscape.js也有三个对应的概念：图（用方法cytoscape()来生成），节点(Node)和边(Edge)。

var cy = cytoscape({
  container: document.getElementById('cy'), 
  elements: {
    nodes: [/* ... */ ],
    edges: [/* ... */ ]
  },
  style: [ /* ... */ ],
  layout: { name: 'cose' }
});
主要是用cytoscape()函数生成cy，并填充其各种属性（如：container, elements, style, layout等等）。

