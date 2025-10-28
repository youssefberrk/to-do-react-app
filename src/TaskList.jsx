import React from "react";
import TaskItem from "./TaskItem";

/**
 * TaskList Component
 * -------------------
 * - Receives tasks and maps them into TaskItem components.
 * - Acts as a middle layer between TaskForm and TaskItem.
 */

const TaskList = ({ tasks, onEdit, deleteTask, completeTask }) => {
	return (
		<div
			id="taskList"
			style={{
				width: "600px",
				height: "auto",
			}}>
			<ol
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					marginBottom: "15px",
					padding: 0,
					listStylePosition: "inside",
				}}>
				{tasks.map((task, index) => (
					<TaskItem
						key={index}
						task={task}
						index={index}
						onEdit={onEdit}
						deleteTask={deleteTask}
						completeTask={completeTask}
					/>
				))}
			</ol>
		</div>
	);
};

export default TaskList;
