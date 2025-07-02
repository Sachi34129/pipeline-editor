<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

# 🛠️ Pipeline Editor (DAG Builder)

A visual editor to build and validate data pipelines using a directed acyclic graph (DAG) in React.

## 🚀 Demo

[Click here to view live demo](https://your-deployed-link.vercel.app)

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
git clone https://github.com/your-username/pipeline-editor
cd pipeline-editor
npm install
npm run dev


## 📁 Folder Structure

src/
├── App.jsx
├── CustomNode.jsx
├── validateDAG.js
├── layoutGraph.js

## 📸 Screenshots

### Node Creation
![Node Creation](./Screenshot_2025-07-02_at_9.05.57_PM/demo1.png)

### Valid DAG Layout
![Auto Layout](./screenshots/demo2.png)

🤯 Challenges Faced
	•	DAG validation (cycle detection using DFS)
	•	Auto layout configuration and edge preservation
	•	Managing consistent state between nodes and edges
