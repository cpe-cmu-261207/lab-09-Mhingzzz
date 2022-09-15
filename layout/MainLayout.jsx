import React from "react";

import Navbar from "../components/Navbar";

import Todolist from "../components/Todolist";

export default function MainLayout(props) {
	return (
		<div>
			<Navbar />
			{props.children}
		</div>
	);
}
