import React from "react";

const TaskItem = ({ task, index, onEdit, deleteTask, completeTask }) => {
	return (
		<>
			

			<li
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					backgroundColor: task.completed
						? "lightgreen"
						: "rgba(238, 130, 238, 0.25)", // 💜 transparent violet / lightgreen if completed
					textDecoration: task.completed ? "line-through" : "none",
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)",
					padding: "15px",
					borderRadius: "15px",
					minHeight: "100px",
					position: "relative",
					boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
					border: "1px solid rgba(255, 255, 255, 0.3)",
					color: "#2c004d", // ✨ perfect deep violet text
					marginBottom: "10px",
				}}>
				<div style={{ fontSize: "1rem", fontWeight: "500", lineHeight: "1.4" }}>
					<h2>{task.title}</h2>
					{task.description}
				</div>

				<div
					style={{
						display: "flex",
						gap: "6px",
						position: "absolute",
						bottom: "10px",
						right: "10px",
					}}>
					<button
						onClick={() => onEdit(index)}
						style={{
							backgroundColor: "rgba(138, 43, 226, 0.4)",
							color: "#fff",
							border: "none",
							padding: "4px 10px",
							borderRadius: "8px",
							cursor: "pointer",
							fontWeight: "500",
							backdropFilter: "blur(6px)",
							boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
						}}>
						✏️ Edit
					</button>
					<button
						style={{
							backgroundColor: "rgba(186, 85, 211,0.4)",
							color: "#fff",
							border: "none",
							padding: "4px 10px",
							borderRadius: "8px",
							cursor: "pointer",
						}}
						onClick={() => deleteTask(index)}>
						🗑 Delete
					</button>
					<button
						style={{
							backgroundColor: "rgba(148, 0, 211,0.4)",
							color: "#fff",
							border: "none",
							padding: "4px 10px",
							borderRadius: "8px",
							cursor: "pointer",
						}}
						onClick={() => completeTask(index)}>
						{task.completed ? " ❌ Undo" : "✅ Complete"}
					</button>
				</div>
			</li>
		</>
	);
};

export default TaskItem;
