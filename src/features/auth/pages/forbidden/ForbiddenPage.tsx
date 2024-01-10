import type { FC } from "react";
import { Link } from "@tanstack/router";

import React from "react";

const ForbiddenPage: FC = () => {


	return (
		<div className="flex flex-col items-center h-full w-full bg-white text-primary ">
			<div className="text-2xl font-semibold pt-4">
				403 &nbsp; | &nbsp; PROTECTED PAGE
			</div>
			<div className="text-gray-300 pt-4  ">
				You don’t have permission to access this page
			</div>
			<Link
				key={"/"}
				className="link-text bg-primary text-white font-semibold rounded-lg w-40  h-8 text-center pt-2 pb-2 px-4 m-2"
				params={{}}
				search={{}}
			>
				Take Me Home
			</Link>
			<a href={"/login"}></a>
		</div>
	);
};

export { ForbiddenPage };
