# 🛠️ Pipeline Editor (DAG Builder)

A visual editor to build and validate data pipelines using a directed acyclic graph (DAG) in React.

---

## 🚀 Demo

👉 [Click here to view live demo](https://pipeline-editor-psi.vercel.app/)

---

## ✨ Features

- Add nodes with custom labels and types (source, process, output)
- Drag and connect nodes with directional edges
- Validate graph as a proper DAG (no cycles, minimum 2 nodes, all connected)
- Delete nodes/edges using the `Delete` key
- Auto-layout using `dagre`
- Real-time JSON debug panel

---

## 🧱 Tech Stack

- React (via Vite)
- React Flow
- Dagre (for layout)
- Zustand (via React Flow)
- JavaScript (ES6)

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/Sachi34129/pipeline-editor
cd pipeline-editor
npm install
npm run dev
```

---

## 📁 Folder Structure

```
pipeline-editor/
├── public/
├── src/
│   ├── App.jsx
│   ├── CustomNode.jsx
│   ├── validateDAG.js
│   └── layoutGraph.js
├── screenshots/
│   ├── demo1.png
│   └── demo2.png
├── README.md
├── package.json
├── vite.config.js
└── index.html

```
