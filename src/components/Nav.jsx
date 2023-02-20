import React from "react";
import { IoMdNotifications, IoMdCart, IoMdSearch } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";

export default function () {
	return (
		<>
			<div className="flex justify-between p-4 shadow-xl bg-[#e7e7e7]">
				{/* can import Link from react router too */}
				<a href="#" className="text-3xl font-bold">
					Foodjoint
				</a>
				<div className="flex items-center gap-4">
					<div>
						<IoMdNotifications className="text-3xl" />
					</div>
					<div className="relative">
						<IoMdCart className="text-3xl text-[#c76923]" />
						<div className="w-4 h-4 rounded-full grid place-items-center text-xs absolute top-0 -right-3 bg-white text-[#c76923] font-bold">
							0
						</div>
					</div>
					<div>
						<BsPersonFill className="text-3xl" />
					</div>
				</div>
			</div>
			<div className="flex mt-4 max-w-[90%] mx-auto shadow-md rounded-lg">
				<input type="text" className="w-full p-3" placeholder="Search" />
				<span className="p-2 self-center cursor-pointer bg-white">
					<IoMdSearch className="text-3xl" />
				</span>
			</div>
		</>
	);
}
