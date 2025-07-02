import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  Controls,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import { validateDAG } from './validateDAG';
import { layoutGraph } from './layoutGraph';

const nodeTypes = {
  custom: CustomNode,
};

function App() {
  const [nodes, setNodes] = useState([
    {
      id: 'start-node',
      type: 'custom',
      data: { label: 'Start', nodeType: 'source' },
      position: { x: 100, y: 100 },
    },
  ]);

  const [edges, setEdges] = useState([]);
  const { fitView } = useReactFlow();
  const [validation, setValidation] = useState({
    isValid: true,
    reason: 'Valid DAG',
  });

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback((params) => {
    if (params.source === params.target) return;

    setEdges((eds) =>
      addEdge(
        {
          ...params,
          type: 'smoothstep',
          markerEnd: {
            type: 'arrowclosed',
          },
        },
        eds
      )
    );
  }, []);

  const handleAddNode = () => {
    const nodeLabel = prompt('Enter node label:');
    if (!nodeLabel) return;

    const typeInput = prompt('Enter node type: source / process / output')?.toLowerCase();
    const validTypes = ['source', 'process', 'output'];
    const nodeType = validTypes.includes(typeInput) ? typeInput : 'process';

    const newNode = {
      id: crypto.randomUUID(),
      type: 'custom',
      data: { label: nodeLabel, nodeType },
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  const handleAutoLayout = () => {
    const layoutedNodes = layoutGraph(nodes, edges);
    setNodes(layoutedNodes);
    setTimeout(() => fitView(), 100);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Delete' || event.key === 'Backspace') {
        setNodes((nds) => nds.filter((node) => !node.selected));
        setEdges((eds) => eds.filter((edge) => !edge.selected));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const result = validateDAG(nodes, edges);
    setValidation(result);
  }, [nodes, edges]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* Buttons */}
      <button
        onClick={handleAddNode}
        style={{
          position: 'absolute',
          zIndex: 10,
          top: 10,
          left: 10,
          padding: '8px 12px',
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        ➕ Add Node
      </button>

      <button
        onClick={handleAutoLayout}
        style={{
          position: 'absolute',
          zIndex: 10,
          top: 10,
          left: 130,
          padding: '8px 12px',
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        🧲 Auto Layout
      </button>

      {/* DAG Validation */}
      <div
        style={{
          position: 'absolute',
          top: 50,
          left: 10,
          zIndex: 10,
          padding: '6px 12px',
          backgroundColor: validation.isValid ? '#d1fae5' : '#fee2e2',
          color: validation.isValid ? '#065f46' : '#991b1b',
          border: `1px solid ${validation.isValid ? '#34d399' : '#f87171'}`,
          borderRadius: 6,
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      >
        {validation.reason}
      </div>

      {/* React Flow Canvas */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable
        elementsSelectable
        defaultEdgeOptions={{
          type: 'smoothstep',
          markerEnd: { type: 'arrowclosed' },
        }}
      >
        <Background />
        <Controls />
      </ReactFlow>

      {/* Debug JSON View */}
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          width: '350px',
          maxHeight: '40vh',
          overflow: 'auto',
          backgroundColor: '#f3f4f6',
          padding: '12px',
          fontSize: '12px',
          fontFamily: 'monospace',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          zIndex: 10,
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: 6 }}>🧠 Pipeline State (Debug View)</div>
        <div>
          <strong>Nodes:</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(nodes, null, 2)}</pre>
        </div>
        <div>
          <strong>Edges:</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(edges, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;