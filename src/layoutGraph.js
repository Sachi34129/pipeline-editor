import dagre from 'dagre';

const nodeWidth = 150;
const nodeHeight = 60;

function layoutGraph(nodes, edges, direction = 'LR') {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: direction });

  // Add nodes to dagre
  nodes.forEach((node) => {
    g.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  // Add edges
  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  dagre.layout(g);

  // Return updated nodes with dagre-calculated positions
  return nodes.map((node) => {
    const dagreNode = g.node(node.id);
    return {
      ...node,
      position: {
        x: dagreNode.x - nodeWidth / 2,
        y: dagreNode.y - nodeHeight / 2,
      },
    };
  });
}

export { layoutGraph };