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

                elements: [
    { // node n1
        group: 'nodes', // 'nodes'是节点元素, 'edges'是边线元素
        //group字段可以自动推断出来，但是指定它会在初始化元素时给您很好的调试消息
        data: { //元素数据 (使用json可序列化的数据)
            id: 'n1', // 每个元素的必选(string) id，在未定义时自动赋值
            parent: 'nparent', // 指示复合节点父id; 未指定则没有父节点
            // (`parent` 可以被 `eles.move()` 改变)
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
            'background-color': 'red'
        }
    },
    { // node n2
        data: { id: 'n2' },
        renderedPosition: { x: 200, y: 200 } //可以选择指定位置在屏幕上渲染像素
    },
    { // node nparent
        data: { id: 'nparent' }
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
