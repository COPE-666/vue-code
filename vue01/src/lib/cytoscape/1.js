let a = [
     {
        "selector": "node",
        "properties": [
            {
                "name": "shape"
            },
            {
                "name": "content"
            },
            {
                "name": "font-size",
                "value": 20
            },
            {
                "name": "width"
            },
            {
                "name": "height"
            },
            {
                "name": "text-valign",
                "value": "center"
            },
            {
                "name": "text-halign",
                "value": "center"
            },
            {
                "name": "border-width",
                "value": 1.5
            },
            {
                "name": "border-color",
                "value": "#555"
            },
            {
                "name": "background-color",
                "value": "#f6f6f6"
            },
            {
                "name": "text-opacity",
                "value": 1
            },
            {
                "name": "opacity",
                "value": 1
            },
            {
                "name": "text-outline-color",
                "value": "white"
            },
            {
                "name": "text-outline-opacity",
                "value": 1
            },
            {
                "name": "text-outline-width",
                "value": 0.75
            }
        ]
    },
    {
        "selector": "node:selected",
        "properties": [
            {
                "name": "background-color",
                "value": "#d67614"
            },
            {
                "name": "target-arrow-color",
                "value": "#000"
            },
            {
                "name": "text-outline-color",
                "value": "#000"
            }
        ]
    },
     {
        "selector": "node:active",
        "properties": [
            {
                "name": "overlay-color",
                "value": "#d67614"
            },
            {
                "name": "overlay-padding",
                "value": "14"
            }
        ]
    },
    {
        "selector": "\n          node[class=\"unspecified entity\"],\n          node[class=\"simple chemical\"], node[class=\"simple chemical multimer\"],\n          node[class=\"macromolecule\"], node[class=\"macromolecule multimer\"],\n          node[class=\"nucleic acid feature\"], node[class=\"nucleic acid feature multimer\"],\n          node[class=\"perturbing agent\"],\n          node[class=\"phenotype\"],\n          node[class=\"complex\"], node[class=\"complex multimer\"], node[class=\"compartment\"]\n        ",
        "properties": [
            {
                "name": "background-image"
            },
            {
                "name": "background-width"
            },
            {
                "name": "background-position-x"
            },
            {
                "name": "background-position-y"
            },
            {
                "name": "background-fit"
            },
            {
                "name": "background-clip"
            },
            {
                "name": "padding"
            },
            {
                "name": "border-width"
            }
        ]
    },
    {
        "selector": "\n          node[class=\"simple chemical multimer\"],\n          node[class=\"macromolecule multimer\"],\n          node[class=\"nucleic acid feature multimer\"],\n          node[class=\"complex multimer\"]\n        ",
        "properties": [
            {
                "name": "ghost",
                "value": "yes"
            },
            {
                "name": "ghost-opacity",
                "value": 1
            }
        ]
    },
    {
        "selector": "\n          node[class=\"macromolecule multimer\"],\n          node[class=\"nucleic acid feature multimer\"]\n        ",
        "properties": [
            {
                "name": "ghost-offset-x",
                "value": 12
            },
            {
                "name": "ghost-offset-y",
                "value": 12
            }
        ]
    },
    {
        "selector": "\n          node[class=\"simple chemical multimer\"]\n        ",
        "properties": [
            {
                "name": "ghost-offset-x",
                "value": 5
            },
            {
                "name": "ghost-offset-y",
                "value": 5
            }
        ]
    },
   {
        "selector": "\n          node[class=\"complex multimer\"]\n        ",
        "properties": [
            {
                "name": "ghost-offset-x",
                "value": 16
            },
            {
                "name": "ghost-offset-y",
                "value": 16
            }
        ]
    },
    {
        "selector": "node[class=\"complex\"], node[class=\"complex multimer\"], node[class=\"compartment\"]",
        "properties": [
            {
                "name": "compound-sizing-wrt-labels",
                "value": "exclude"
            },
            {
                "name": "text-valign",
                "value": "bottom"
            },
            {
                "name": "text-halign",
                "value": "center"
            }
        ]
    },
    {
        "selector": "node[class=\"association\"], node[class=\"dissociation\"]",
        "properties": [
            {
                "name": "background-opacity",
                "value": 1
            }
        ]
    },
    {
        "selector": "node[class=\"association\"]",
        "properties": [
            {
                "name": "background-color",
                "value": "#6B6B6B"
            }
        ]
    },
    {
        "selector": "node[class=\"source and sink\"]",
        "properties": [
            {
                "name": "background-image"
            },
            {
                "name": "background-fit",
                "value": "none"
            },
            {
                "name": "background-width",
                "value": "100%"
            },
            {
                "name": "background-height",
                "value": "100%"
            },
            {
                "name": "background-clip",
                "value": "none"
            },
            {
                "name": "background-repeat",
                "value": "no-repeat"
            },
            {
                "name": "border-width",
                "value": 0
            },
            {
                "name": "shape-polygon-points",
                "value": "-0.86, 0.5, -0.75, 0.65, -1, 0.95, -0.95, 1, -0.65, 0.75, -0.5, 0.86, 0, 1, 0.5, 0.86, 0.71, 0.71, 0.86, 0.5, 1, 0, 0.86, -0.5, 0.75, -0.65, 1, -0.95, 0.95, -1, 0.65, -0.75, 0.5, -0.86, 0, -1, -0.5, -0.86, -0.71, -0.71, -0.86, -0.5, -1, 0"
            }
        ]
    },
    {
        "selector": "node[class=\"dissociation\"]",
        "properties": [
            {
                "name": "background-image"
            },
            {
                "name": "background-fit",
                "value": "none"
            },
            {
                "name": "background-width",
                "value": "100%"
            },
            {
                "name": "background-height",
                "value": "100%"
            },
            {
                "name": "background-clip",
                "value": "none"
            },
            {
                "name": "background-repeat",
                "value": "no-repeat"
            },
            {
                "name": "border-width",
                "value": 0
            }
        ]
    },
    {
        "selector": "edge",
        "properties": [
            {
                "name": "arrow-scale",
                "value": 1.75
            },
            {
                "name": "curve-style",
                "value": "bezier"
            },
            {
                "name": "line-color",
                "value": "#555"
            },
            {
                "name": "target-arrow-fill",
                "value": "hollow"
            },
            {
                "name": "source-arrow-fill",
                "value": "hollow"
            },
            {
                "name": "width",
                "value": 1.5
            },
            {
                "name": "target-arrow-color",
                "value": "#555"
            },
            {
                "name": "source-arrow-color",
                "value": "#555"
            },
            {
                "name": "text-border-color",
                "value": "#555"
            },
            {
                "name": "color",
                "value": "#555"
            }
        ]
    },
    {
        "selector": "edge:selected",
        "properties": [
            {
                "name": "color",
                "value": "#d67614"
            },
            {
                "name": "line-color",
                "value": "#d67614"
            },
            {
                "name": "text-border-color",
                "value": "#d67614"
            },
            {
                "name": "source-arrow-color",
                "value": "#d67614"
            },
            {
                "name": "target-arrow-color",
                "value": "#d67614"
            }
        ]
    },
    {
        "selector": "edge:active",
        "properties": [
            {
                "name": "background-opacity",
                "value": 0.7
            },
            {
                "name": "overlay-color",
                "value": "#d67614"
            },
            {
                "name": "overlay-padding",
                "value": "8"
            }
        ]
    },
    {
        "selector": "edge[cardinality > 0]",
        "properties": [
            {
                "name": "text-background-shape",
                "value": "rectangle"
            },
            {
                "name": "text-border-opacity",
                "value": "1"
            },
            {
                "name": "text-border-width",
                "value": "1"
            },
            {
                "name": "text-background-color",
                "value": "white"
            },
            {
                "name": "text-background-opacity",
                "value": "1"
            }
        ]
    },
    {
        "selector": "edge[class=\"consumption\"][cardinality > 0], edge[class=\"production\"][cardinality > 0]",
        "properties": [
            {
                "name": "source-label"
            },
            {
                "name": "source-text-offset",
                "value": 10
            }
        ]
    },
    {
        "selector": "edge[class]",
        "properties": [
            {
                "name": "target-arrow-shape"
            },
            {
                "name": "source-arrow-shape",
                "value": "none"
            }
        ]
    },
    {
        "selector": "edge[class=\"inhibition\"]",
        "properties": [
            {
                "name": "target-arrow-fill",
                "value": "filled"
            }
        ]
    },
    {
        "selector": "edge[class=\"production\"]",
        "properties": [
            {
                "name": "target-arrow-fill",
                "value": "filled"
            }
        ]
    },
    {
        "selector": "core",
        "properties": [
            {
                "name": "selection-box-color",
                "value": "#d67614"
            },
            {
                "name": "selection-box-opacity",
                "value": "0.2"
            },
            {
                "name": "selection-box-border-color",
                "value": "#d67614"
            }
        ]
    },
]

a = a.trim(); // remove the unwanted whitespace
console.log(JSON.parse(JSON.stringify(a)));