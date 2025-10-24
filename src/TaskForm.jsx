import React, { useState } from "react";
import TaskList from "./TaskList";

export const TaskForm = () => {
	// 🧠 1. Create state variables to store input values
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [tasks, setTasks] = useState([]);
	const [editingTaskIndex, setEditingTaskIndex] = useState(null);
	// Add new task or update existing one
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!title || !description) return alert("Please fill all fields!");

		if (editingTaskIndex !== null) {
			// Update task
			const updatedTasks = [...tasks];
			updatedTasks[editingTaskIndex] = { title, description };
			setTasks(updatedTasks);
			setEditingTaskIndex(null); // Exit editing mode
		} else {
			// Add new task
			setTasks([...tasks, { title, description }]);
		}

		// Clear form
		setTitle("");
		setDescription("");
	};

	// Start editing a task
	const handleEdit = (index) => {
		setEditingTaskIndex(index);
		setTitle(tasks[index].title);
		setDescription(tasks[index].description);
	};

	const deleteTask = (index) =>{
		const filtredTasks = tasks.filter((_,i) => i !== index )
		setTasks(filtredTasks);
	}

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
				<TaskList tasks={tasks} onEdit={handleEdit} deleteTask={deleteTask}/>
			</div>
		</div>
	);
};
