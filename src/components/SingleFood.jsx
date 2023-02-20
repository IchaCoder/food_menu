import React from "react";

const SingleFood = ({ food }) => {
	// destructuring from food props
	const { name, location, price, img } = food;

	return (
		<div className="flex bg-white p-4 gap-4 rounded-lg shadow-md">
			<img
				src={img}
				className="max-h-[120px] max-w-[120px] self-center"
				alt={name}
			/>
			<div className="flex gap-2">
				<div>
					<h2 className="text-lg font-bold">{name}</h2>
					<h3 className="font-semibold text-gray-400 text-sm">{location}</h3>
					<div className="text-[#c76923] font-semibold text-sm">Closed</div>
					<div className="font-semibold text-gray-400 text-sm">
						Opens @ 11:00 AM
					</div>
				</div>
				<div className="self-center text-[#c76923] font-semibold">
					<span className="text-gray-400 text-sm">GHC</span>
					{price}
				</div>
			</div>
		</div>
	);
};

export default SingleFood;
