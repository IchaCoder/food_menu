import React from "react";
import { ImSpoonKnife } from "react-icons/im";
import { MdFastfood } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

const BottomNav = () => {
	return (
		<nav className="flex justify-around bg-slate-50 p-4 fixed bottom-0 left-0 w-full">
			<div className="opacity-80 hover:text-[#c76923] cursor-pointer active">
				<div className="flex justify-center">
					<ImSpoonKnife className="text-3xl" />
				</div>
				<h3>Dishes</h3>
			</div>
			<div className="opacity-80 hover:text-[#c76923] cursor-pointer">
				<div className="flex justify-center">
					<MdFastfood className="text-3xl" />
				</div>
				<h3>Foodjoints</h3>
			</div>
			<div className="opacity-80 hover:text-[#c76923] cursor-pointer">
				<div className="flex justify-center">
					<TfiMenuAlt className="text-3xl" />
				</div>
				<h3>My Orders</h3>
			</div>
		</nav>
	);
};

export default BottomNav;
