import { useState } from "react";
import BottomNav from "./components/BottomNav";
import Foods from "./components/Foods";
import Nav from "./components/Nav";
import "./output.css";

function App() {
	return (
		<div className="min-h-screen bg-[#ededed]">
			<Nav />
			<Foods />
			<BottomNav />
		</div>
	);
}

export default App;
