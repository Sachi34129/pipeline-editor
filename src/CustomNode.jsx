import React from 'react';
import { Handle, Position } from 'reactflow';

const typeColors = {
  source: '#a5f3fc',   // cyan
  process: '#e0e7ff',  // indigo
  output: '#bbf7d0',   // green
};

const CustomNode = ({ data }) => {
  const backgroundColor = typeColors[data?.nodeType] || '#f3f4f6';

  return (
    <div
      style={{
        padding: 10,
        borderRadius: 6,
        border: '1px solid #9ca3af',
        backgroundColor,
        minWidth: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
      }}
    >
      <Handle type="target" position={Position.Left} />
      {data?.label}
      <div style={{ fontSize: '10px', color: '#374151', marginTop: 4 }}>
        {data?.nodeType?.toUpperCase()}
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default CustomNode;