import React from "react";
import menu from "../data";
import SingleFood from "./SingleFood";

export default function () {
	return (
		<section className="mt-4 pb-24 max-w-[90%] mx-auto grid gap-4">
			{menu.map((food, index) => {
				return <SingleFood key={index} food={food} />;
			})}
		</section>
	);
}
