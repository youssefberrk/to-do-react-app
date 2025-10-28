# 🧾 React To-Do List App

A simple and elegant **To-Do List application** built with **React.js**.  
This app allows users to add, edit, delete, complete, and filter tasks —  
including setting **due dates and times** for better task organization.  
All data is **persisted in Local Storage**, so tasks remain saved even after refreshing the page.

---

## ✨ Features

- ✏️ Add new tasks with title, description, due date, and time
- 🧠 Edit existing tasks directly
- ✅ Mark tasks as completed
- 🔍 Filter to show only completed tasks
- 🗑️ Delete individual tasks or clear all
- 💾 Automatically saves tasks to `localStorage`
- 🎨 Clean glassmorphism UI (transparent background with blur effect)

---

## 🧩 Project Structure

```
src/
├── App.js
├── App.css
├── components/
│ ├── TaskForm.jsx # Handles creating and managing tasks
│ ├── TaskList.jsx # Displays all tasks
│ └── TaskItem.jsx # Individual task card with actions
└── index.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/to-do-react-app.git
cd to-do-react-app
```

### 2️⃣ Install dependencies

- Make sure you have Node.js and npm installed.
  Then run:

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm start
```

- This will start the app at:
  👉 http://localhost:3000

## 💡 How to Use

### 1 - Enter a task title and description.

### 2 - Choose a due date and time.

### 3 - Click “Add Task”.

### 4 -Use:

- ✅ Complete → mark task as done

- ✏️ Edit → update task details

- 🗑️ Delete → remove a task

- ☑️ Show Completed Only → filter finished tasks

### 5 - Click Clear All Tasks 🗑️ to remove everything.

## 🧠 Technologies Used

- React.js (Hooks: useState, useEffect)

- HTML5 + CSS3 (Glassmorphism design)

- Local Storage API

## ⚠️ Considerations

- Tasks are stored locally in your browser — no external database needed.

- Clearing browser data will also remove your saved tasks.

- The UI is responsive but can be improved for mobile devices.

## 👨‍💻 Author

- yosef berrak : github.com/youssefberrk
