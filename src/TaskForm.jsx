import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";

/**
 * TaskForm Component
 * -------------------
 * - Handles creating, editing, and saving tasks.
 * - Stores tasks in localStorage so they persist between sessions.
 * - Passes tasks and handler functions to TaskList for display.
 */
export const TaskForm = () => {
	// 🧠 1. Create state variables to store input values
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [tasks, setTasks] = useState([
		{ title, description, completed: false },
	]);
	const [dueDate, setDueDate] = useState("");
	const [dueTime, setDueTime] = useState("");
	const [editingTaskIndex, setEditingTaskIndex] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false); // 👈 guard flag
	const [showCompleted, setShowCompleted] = useState(false);
	// Add new task or update existing one
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!title || !description) return alert("Please fill all fields!");

		if (editingTaskIndex !== null) {
			// Update task
			const updatedTasks = [...tasks];
			updatedTasks[editingTaskIndex] = {
				...updatedTasks[editingTaskIndex],
				title,
				description,
				dueDate,
				dueTime,
			};
			setTasks(updatedTasks);
			setEditingTaskIndex(null); // Exit editing mode
		} else {
			// Add new task
			setTasks([
				...tasks,
				{ title, description, dueDate, dueTime, completed: false },
			]);
		}

		// Clear form
		setTitle("");
		setDescription("");
		setDueDate("");
		setDueTime("");
	};
	// 🧠 1️⃣ Load tasks from localStorage (only once)
	useEffect(() => {
		const savedTasks = localStorage.getItem("tasks");
		if (savedTasks) {
			setTasks(JSON.parse(savedTasks));
		}
		setIsLoaded(true); // ✅ mark that loading is done
	}, []);

	// 🧠 2️⃣ Save tasks whenever they change, but only after initial load
	useEffect(() => {
		if (isLoaded) {
			localStorage.setItem("tasks", JSON.stringify(tasks));
		}
	}, [tasks, isLoaded]);

	// Start editing a task
	const handleEdit = (index) => {
		setEditingTaskIndex(index);
		setTitle(tasks[index].title);
		setDescription(tasks[index].description);
		setDueDate(tasks[index].dueDate);
		setDueTime(tasks[index].dueTime);
	};
	// delete task
	const deleteTask = (index) => {
		const filtredTasks = tasks.filter((_, i) => i !== index);
		setTasks(filtredTasks);
	};

	// 🧹 clear all tasks button
	const clearAllTasks = () => {
		if (window.confirm("Are you sure you want to clear all tasks?")) {
			setTasks([]);
			localStorage.removeItem("tasks");
		}
	};
	// styling to highlight active and completed tasks
	const completeTask = (index) => {
		const completedTasks = tasks.map((t, i) =>
			i === index ? { ...t, completed: !t.completed } : t
		);
		setTasks(completedTasks);
	};

	return (
		<div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(255, 255, 255, 0.2)",
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)",
					borderRadius: "15px",
					padding: "20px",
					marginTop: "10px",
					boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
					width: "600px",
					height: "auto",
				}}>
				<h1>TO-DO List 📋</h1>
				<h2>Add Your Task:</h2>

				<form
					onSubmit={handleSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
						margin: "10px",
						padding: "10px",
						width: "100%",
						maxWidth: "500px",
					}}>
					<label htmlFor="title">Title:</label>
					<input
						id="title"
						name="title"
						placeholder="task name..."
						value={title} // ✅ linked to state
						onChange={(e) => setTitle(e.target.value)} // ✅ updates state
						style={{
							fontSize: "1.2rem",
							padding: "8px",
							borderRadius: "8px",
							border: "1px solid #ccc",
						}}
					/>

					<label htmlFor="taskDesc" style={{ marginTop: "10px" }}>
						Description:
					</label>
					<textarea
						id="taskDesc"
						name="taskDesc"
						value={description} // ✅ linked to state
						onChange={(e) => setDescription(e.target.value)} // ✅ updates state
						placeholder="Enter task description..."
						rows="5"
						style={{
							padding: "10px",
							borderRadius: "8px",
							border: "1px solid #ccc",
							fontSize: "16px",
							resize: "vertical",
						}}></textarea>

					<label htmlFor="dueDate">Due Date:</label>
					<input
						type="date"
						id="dueDate"
						name="dueDate"
						value={dueDate}
						onChange={(e) => setDueDate(e.target.value)}
						style={{
							fontSize: "1rem",
							padding: "8px",
							borderRadius: "8px",
							border: "1px solid #ccc",
						}}
						required
					/>
					<label>Due Time:</label>
					<input
						type="time"
						value={dueTime}
						onChange={(e) => setDueTime(e.target.value)}
						style={{
							fontSize: "1rem",
							padding: "8px",
							borderRadius: "8px",
							border: "1px solid #ccc",
						}}
						required
					/>

					<button
						type="submit"
						style={{
							padding: "10px",
							borderRadius: "8px",
							backgroundColor:
								editingTaskIndex !== null ? "#FFB800" : "#4A90E2",
							color: "#fff",
							fontWeight: "500",
							cursor: "pointer",
							border: "none",
						}}>
						{editingTaskIndex !== null ? "Update Task" : "Add Task"}
					</button>
				</form>
				<div>
					<label>
						<input
							type="checkbox"
							checked={showCompleted}
							onChange={(e) => setShowCompleted(e.target.checked)}
						/>
						Show Completed Tasks Only
					</label>
				</div>
				<TaskList
					tasks={showCompleted ? tasks.filter((t) => t.completed) : tasks}
					onEdit={handleEdit}
					deleteTask={deleteTask}
					completeTask={completeTask}
				/>
			</div>
			{tasks.length > 1 && (
				<button
					onClick={clearAllTasks}
					style={{
						marginTop: "20px",
						padding: "10px",
						borderRadius: "8px",
						backgroundColor: "#E74C3C",
						color: "#fff",
						border: "none",
						cursor: "pointer",
					}}>
					Clear All Tasks 🗑️
				</button>
			)}
		</div>
	);
};
