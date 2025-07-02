export function validateDAG(nodes, edges) {
    const result = {
      isValid: true,
      reason: 'Valid DAG',
    };
  
    // 1. Minimum 2 nodes
    if (nodes.length < 2) {
      result.isValid = false;
      result.reason = 'DAG must contain at least 2 nodes.';
      return result;
    }
  
    // 2. All nodes connected to at least one edge
    const connectedNodeIds = new Set();
    edges.forEach(edge => {
      connectedNodeIds.add(edge.source);
      connectedNodeIds.add(edge.target);
    });
  
    for (let node of nodes) {
      if (!connectedNodeIds.has(node.id)) {
        result.isValid = false;
        result.reason = `Node "${node.data.label}" is not connected.`;
        return result;
      }
    }
  
    // 3. Check for cycles using DFS
    const adjacency = {};
    nodes.forEach(node => {
      adjacency[node.id] = [];
    });
    edges.forEach(edge => {
      adjacency[edge.source].push(edge.target);
    });
  
    const visited = {};
    const stack = {};
  
    const hasCycle = (nodeId) => {
      visited[nodeId] = true;
      stack[nodeId] = true;
  
      for (let neighbor of adjacency[nodeId]) {
        if (!visited[neighbor] && hasCycle(neighbor)) return true;
        else if (stack[neighbor]) return true;
      }
  
      stack[nodeId] = false;
      return false;
    };
  
    for (let node of nodes) {
      if (!visited[node.id]) {
        if (hasCycle(node.id)) {
          result.isValid = false;
          result.reason = 'Cycle detected in the DAG.';
          return result;
        }
      }
    }
  
    return result;
  }