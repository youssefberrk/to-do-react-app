import "./App.css";
import { TaskForm } from "./TaskForm";

function App() {
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<TaskForm />
		</div>
	);
}

export default App;
