G = {
  "0": ["1", "3"],
  "1": ["3", "4"],
  "2": [],
  "3": ["2"],
  "4": ["3"],
  "5": ["0"],
}

var editor = ace.edit("graph-input");
editor.renderer.setShowGutter(false);
editor.getSession().setMode("ace/mode/javascript");


setTextAreaDefault();

function prettyPrintRefresh() {
  var ugly = editor.getValue();
  var obj = JSON.parse(ugly);
  var pretty = js_beautify(JSON.stringify(obj, undefined));
  editor.setValue(pretty);
}

function setTextAreaDefault() {
  var pretty = js_beautify(JSON.stringify(G, undefined));
  editor.setValue(pretty, 1);
  $('#')
}

function nodeExists(nodes, val) {
  var exists = false;
  if (nodes[val.toString()]) {
    exists = true;
  }
  return exists;
}

function createNode(id) {
  var node = {}
  node[id.toString()] = {
    "name": id.toString()
  }
  return node;
}

function createData(G) {
  var nodes = {};
  var edges = [];

  $.each(G, function(fromVertex, connectedVertices) {
    if (!nodeExists(nodes, fromVertex)) {
      nodes[fromVertex.toString()] = {
        "name": fromVertex.toString()
      }
    }

    connectedVertices.forEach(function(toVertex) {
      if (!nodeExists(nodes, toVertex)) {
        nodes[toVertex.toString()] = {
          "name": toVertex.toString()
        }
      }

      edge = {
        "source": fromVertex.toString(),
        "target": toVertex.toString(),
        "type": "licensing",
      }

      edges.push(edge);
    });
  });


  data = {
    "nodes": nodes,
    "edges": edges
  }
  return data;
}

data = createData(G);
update(data.edges, data.nodes);


function submit() {
  val = editor.getValue();
  console.log(val);
  graph = JSON.parse(val);
  data = createData(graph);
  update(data.edges, data.nodes);
}