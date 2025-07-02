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

---

## 📸 Screenshots

### Node Creation
![Node Creation](./screenshots/Screenshot 2025-07-02 at 9.10.42 PM.png)

### Valid DAG Layout
![Auto Layout](./screenshots/Screenshot 2025-07-02 at 9.13.24 PM.png)

---

## 🤯 Challenges Faced

- Cycle Detection: Implementing real-time DAG validation required custom DFS traversal logic to check for cycles.
- Auto Layout: Integrating dagre and maintaining correct positioning after layout was non-trivial.
- Edge Validation: Ensuring edges only connect from source → target, preventing invalid connections like output → output.
- State Management: Keeping node/edge state in sync with reactflow events, especially during deletion or reconnection.
- User Feedback: Providing clear DAG status messages with reasons for invalidity (e.g., “cycle detected”, “unconnected node”).

---

You can now paste this into your `README.md` and commit it:

```bash
git add README.md
git commit -m "Final README update"
git push
```
