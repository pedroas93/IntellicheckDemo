import type { FC } from "react";
import { useNavigate } from "@tanstack/router";
import React from "react";

const Home: FC = () => {
	const navigate = useNavigate();
	void navigate({ to: `/Login` });

	return (
		<div className="flex flex-col items-center h-full w-full bg-white text-primary ">
			Home
		</div>
	);
};

export { Home };
