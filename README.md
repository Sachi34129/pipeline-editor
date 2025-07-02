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

### 🧩 Start Node Creation
<img src="./screenshots/Screenshot_1.png" width="50%" />

### 🧠 Enter Node Label
<img src="./screenshots/Screenshot_2.png" width="50%" />

### 🔁 Cycle Detected in DAG
<img src="./screenshots/Screenshot_3.png" width="50%" />

### ✅ Valid DAG (Before Layout)
<img src="./screenshots/Screenshot_5.png" width="50%" />

### 🔃 Auto Layout Applied
<img src="./screenshots/Screenshot_4.png" width="50%" />

### ⚠️ Disconnected Node Warning
<img src="./screenshots/Screenshot_6.png" width="50%" />

### ❌ Empty Graph
<img src="./screenshots/Screenshot_7.png" width="50%" />

---

## 🎥 Demo Walkthrough (Screen Recording)

> 🔗 [Click here to watch the screen recording on Google Drive](https://drive.google.com/file/d/your-drive-id/view)

This recording shows how to:
- Add and connect nodes
- Validate DAG
- Trigger auto layout
- Handle common errors like disconnected nodes or cycles

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
