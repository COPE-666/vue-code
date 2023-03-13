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
                            // 'background-image': 'url(data:image/jpeg;base64,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)',
                            'display': 'block',
                            'width': '60',
                            'height': '30'
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

                elements: [
                    { // node n1
                        group: 'nodes', // 'nodes'是节点元素, 'edges'是边线元素
                        //group字段可以自动推断出来，但是指定它会在初始化元素时给您很好的调试消息
                        data: { //元素数据 (使用json可序列化的数据)
                            id: 'n1', // 每个元素的必选(string) id，在未定义时自动赋值
                            parent: 'nparent', // 指示复合节点父id; 未指定则没有父节点
                            // (`parent` 可以被 `eles.move()` 改变)
                            name: 'n1'
                        },

                        //临时数据(通常是临时数据或非序列化数据)
                        scratch: {
                            _foo: 'bar' // app fields prefixed by underscore; extension fields unprefixed
                        },

                        position: { //节点的模型位置(初始化时可选，初始化后必选)
                            x: 100,
                            y: 100
                        },

                        selected: false, // 元素是否被选中(默认为false)
                        selectable: true, // 选择状态是否可变(默认为true)
                        locked: false, // 锁定时，节点的位置是不可变的(默认为false)
                        grabbable: true, // 节点是否可以被用户抓取和移动
                        pannable: false, //拖动节点是否会导致平移而不是抓取
                        classes: ['foo', 'bar'], //元素的类名数组(或空格分隔的字符串)

                        //除非绝对必要，否则不要使用' style '字段，而是使用STYLESHEET代替
                        style: { // 会覆盖外部其他样式属性
                            'background-color': 'red',
                            'background-image': 'url(./src/assets/logo.png)'
                        }
                    },
                    { // node n3
                        // group: 'nodes',
                        data: { id: 'n3', name: 'n3', parent: 'nparent'},
                        // renderedPosition: { x: 200, y: 200 } //可以选择指定位置在屏幕上渲染像素
                    },
                    { // node n2
                        data: { id: 'n2', name: 'n2'},
                        // renderedPosition: { x: 200, y: 200 } //可以选择指定位置在屏幕上渲染像素
                    },
                    { // node nparent
                        data: { id: 'nparent', name: 'nparent'}
                        //复合父节点没有独立的尺寸（位置和大小），因为这些值是由后代节点的位置和尺寸自动推断出来的
                    },
                    { // edge e1
                        group: 'edges', //可以不指定group，只要指定 'source' 和 'target'就会自动推断为一条边:
                        data: {
                            id: 'e1',
                            source: 'n1', //源节点id(边线来自于该节点)
                            target: 'n2'  //目标节点id(边线到此节点)
                            // (`source` and `target` 可以被 `eles.move()` 改变)
                        },
                        pannable: true // 拖动边缘是否会导致平移
                    }
                ],

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
