var sbgnStylesheet = require('./build/bundle.js');
var cytoscape = window.cytoscape;

var aa = window.aa = sbgnStylesheet(cytoscape);
setTimeout(function(){
  console.log(sbgnStylesheet(cytoscape));
}, 1000)

var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),
  elements: fetch('./demo.json').then( res => res.json() ),
  layout: { name: 'preset' },
  style: sbgnStylesheet(cytoscape)
});

console.log(cy);