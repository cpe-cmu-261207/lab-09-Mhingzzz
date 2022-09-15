import { useEffect, useState } from "react";
import Todolist from "../components/Todolist";
import {
	IconCheck,
	IconTrash,
	IconArrowUp,
	IconArrowDown,
	IconSunHigh,
	IconMoon,
} from "@tabler/icons";
import { ThemeContext } from "../context/ThemeContext";
import MainLayout from "../layout/MainLayout";

export default function Home() {
	const theme = {
		light: {
			name: "light",
			background: "white",
			foreground: "black",
		},
		dark: {
			name: "dark",
			background: "black",
			foreground: "white",
		},
	};
	const [setTheme, setsetTheme] = useState(theme.dark);
	const toggleTheme = () => {
		if (setTheme.name === "light") setsetTheme(theme.dark);
		else setsetTheme(theme.light);
	};
	const setThemeLight = () => setsetTheme(theme.light);
	const setThemeDark = () => setsetTheme(theme.dark);

	const [TodolistText, setTodolistText] = useState("");
	const [Todolists, setTodolists] = useState([]);

	useEffect(() => {
		const TodolistStr = localStorage.getItem(`react-Todolists`);
		if (TodolistStr == null) {
			setTodolists([]);
		} else {
			setTodolists(JSON.parse(TodolistStr));
		}
	}, []);

	const [isFirstRender, setIsFirstRender] = useState(true);

	useEffect(() => {
		if (isFirstRender) {
			setIsFirstRender(false);
			return;
		}
		saveTodolist();
	}, [Todolists]);

	const onKeyUpHandler = (e) => {
		if (e.key != "Enter") return;
		if (e.target.value == "") {
			alert("Todolist cannot be empty");
		} else {
			const newTodolist = [
				...Todolists,
				{ title: TodolistText, completed: false },
			];

			setTodolists(newTodolist);
			setTodolistText("");
		}
	};
	const deleteTodolist = (idx) => {
		Todolists.splice(idx, 1);
		const newTodolists = [...Todolists];
		setTodolists(newTodolists);
	};

	const markTodolist = (idx) => {
		const newTodolists = [...Todolists];
		newTodolists[idx].completed = !newTodolists[idx].completed;
		setTodolists(newTodolists);
	};

	const moveUp = (idx) => {
		if (idx === 0) return;
		const title = Todolists[idx].title;
		const completed = Todolists[idx].completed;
		Todolists[idx].title = Todolists[idx - 1].title;
		Todolists[idx].completed = Todolists[idx - 1].completed;

		Todolists[idx - 1].title = title;
		Todolists[idx - 1].completed = completed;
		setTodolists([...Todolists]);
	};

	const moveDown = (idx) => {
		if (idx === Todolists.length - 1) return;
		const title = Todolists[idx].title;
		const completed = Todolists[idx].completed;
		Todolists[idx].title = Todolists[idx + 1].title;
		Todolists[idx].completed = Todolists[idx + 1].completed;

		Todolists[idx + 1].title = title;
		Todolists[idx + 1].completed = completed;
		setTodolists([...Todolists]);
	};

	const saveTodolist = () => {
		const TodolistStr = JSON.stringify(Todolists);
		localStorage.setItem(`react-Todolists`, TodolistStr);
	};
	return (
		<MainLayout>
			<div style={{ backgroundColor: setTheme.background, minHeight: "100vh" }}>
				<ThemeContext.Provider value={{ setTheme, toggleTheme }}>
					{/* Entire App container (required for centering) */}
					<div style={{ maxWidth: "700px" }} className="mx-auto">
						{/* App header */}
						<p
							className="display-4 text-center fst-italic m-4"
							style={{ color: setTheme.foreground }}
						>
							Minimal Todolist List <span className="fst-normal">☑️</span>
						</p>
						{/* Input */}
						<div className="d-flex aligh-items-center gap-2">
							<input
								className="form-control mb-1 fs-4"
								placeholder="insert Todolist here..."
								onChange={(e) => setTodolistText(e.target.value)}
								value={TodolistText}
								onKeyUp={onKeyUpHandler}
							/>
							<button className="btn btn-dark" onClick={toggleTheme}>
								{setTheme.name === "light" && <IconSunHigh></IconSunHigh>}
								{setTheme.name === "dark" && <IconMoon></IconMoon>}
							</button>
						</div>

						{Todolists.map((Todolist, idx) => (
							<Todolist
								key={idx}
								title={Todolist.title}
								completed={Todolist.completed}
								onDelete={() => deleteTodolist(idx)}
								onMark={() => markTodolist(idx)}
								onMoveUp={() => moveUp(idx)}
								onMoveDown={() => moveDown(idx)}
							/>
						))}

						{/* summary section */}
						<p className="text-center fs-4">
							<span className="text-primary">All ({Todolists.length}) </span>
							<span className="text-warning">
								Pending (
								{Todolists.filter((Todolist) => !Todolist.completed).length})
							</span>
							<span className="text-success">
								Completed (
								{Todolists.filter((Todolist) => Todolist.completed).length})
							</span>
						</p>

						{/* Made by section */}
						<p className="text-center mt-3 text-muted fst-italic">
							made by Nathaphong Phongsawaleesri 640610630
						</p>
					</div>
				</ThemeContext.Provider>
			</div>
		</MainLayout>
	);
}
