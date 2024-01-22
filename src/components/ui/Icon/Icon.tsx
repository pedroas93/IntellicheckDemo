import React from "react";
import type { FC } from "react";


export const ICONS = {
};

export interface IconProps {
	color?: string;
	height?: string;
	name: keyof typeof ICONS;
	width?: string;
}

export const Icon: FC<IconProps> = (props) => {
	const IconComponent = ICONS[props.name];

	return IconComponent ? (
		<div {...props}>
			<IconComponent {...props} />
		</div>
	) : (
		<></>
	);
};
