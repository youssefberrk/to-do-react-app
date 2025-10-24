import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, deleteTask }) => {
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
					/>
				))}
			</ol>
		</div>
	);
};

export default TaskList;
