import { useState } from "react";
import reactLogo from "./assets/react.svg";
import BottomNav from "./components/BottomNav";
import Foods from "./components/Foods";
import Nav from "./components/Nav";
import "./output.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen bg-[#ededed]">
			<Nav />
			<Foods />
			<BottomNav />
		</div>
	);
}

export default App;
