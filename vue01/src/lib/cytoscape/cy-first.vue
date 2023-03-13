<template>
    <div class="box">
      <div id="MainCy" style="width: 100%;height: 100%;"></div>
    </div>
</template>
<script>
    export default {
        mounted() {
            var cy = this.$cytoscape({
                container: document.getElementById('MainCy'),

                layout: {
                    // name: 'preset',
                    // pan: {x: 50, y:100}, // 位移距离 (设置 fit = false 时生效)
                    // fit: false,
                    // rows: 2,
                    // cols: 2
                    name: 'breadthfirst',
directed: false, // 树是否向下(或者如果是false，边线可以指向任何方向)
circle: false, //true，将depths放在同心圆上，false，将depths放在上下
grid: false, // 是否创建一个放置DAG的均匀网格(circle: false时生效)
spacingFactor: 1.5, //正间距因子，数值越大，节点之间空间越大(如果引起重叠，注意n/a)
avoidOverlap: true, // 防止节点重叠，如果没有足够的空间，可能会溢出boundingBox
roots: undefined, // the roots of the trees
maximal: false, //是否向下移动节点的自然BFS depths以避免向上的边(DAGS only)
depthSort: undefined, // 一种排序函数，使节点按等深度排序。例如function(a, b){return a.data('weight') - b.data('weight')}

                },

                style: [{
                        selector: 'node',
                        style: {
                            'content': 'data(name)',
                            'background-color': '#3549fc',
                        }
                    },

                    {
                        selector: 'edge',
                        style: {
                            'content': 'data(relationship)',
                            'curve-style': 'bezier', 
                            'line-color': '#1db1b1',
                        }
                    },
                ],

                elements: {
                    nodes: [
                        {
                            data: {
                                id: 'j',
                                name: 'Jerry'
                            }
                        },
                        {
                            data: {
                                id: 'e',
                                name: 'Elaine'
                            }
                        },
                        {
                            data: {
                                id: 'k',
                                name: 'Kramer'
                            }
                        },
                        {
                            data: {
                                id: 'g',
                                name: 'George'
                            }
                        },
                    ],
                    edges: [
                        {
                            data: {
                                source: 'e',
                                target: 'k',
                                relationship: '1'
                            }
                        },
                        {
                            data: {
                                source: 'k',
                                target: 'e',
                                relationship: '2'
                            }
                        },
                        {
                            data: {
                                source: 'k',
                                target: 'j',
                                relationship: '3'
                            }
                        },
                        {
                            data: {
                                source: 'k',
                                target: 'g',
                                relationship: '4'
                            }
                        },
                        {
                            data: {
                                source: 'e',
                                target: 'j',
                                relationship: '5'
                            }
                        },
                    ]
                }
            });
            cy.nodes().on('click', (evt) => {
                console.log(evt)
            });
            cy.edges().on('click', (evt) => {
                console.log(evt)
            });
        },
    }
</script>

<style scoped>

.box{
  width: 500px;
  height: 500px;
  background-color: #cbe8ff;
}
</style>
