import type { ReactElement } from "react";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
// import { cn } from "@/utils/cn";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import "./Button.css";

export function cn(...inputs: Array<ClassValue>) {
	return twMerge(clsx(inputs));
}

export const buttonVariants = cva(
	"inline-flex items-center justify-center   disabled:pointer-events-none disabled:opacity-50 bg-gray-250 text-white rounded-lg transition-colors	transition-duration: 250ms pl-6 pr-6 ",
	{
		variants: {
			variant: {
				base: "text-base",
				primary: "bg-primary-500 h-12",
				gold: "bg-gold-500/[.12] text-gold-500 rounded-2xl pl-4 pr-4  hover:bg-gold-350 font-semibold",
				gray: "bg-gray-200 rounded-2xl text-primary pl-4 pr-4  hover:bg-primary hover:text-white font-semibold",
				white:
					"bg-white text-primary border border-primary rounded-2xl pl-4 pr-4  hover:bg-primary hover:text-white font-semibold p-2 font-bold",
				danger: "",
				success: "",
				info: "",
				outline: "",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				primary: "h-8",
				small: "h-8 text-[13px]",
				large: "h-12 ",
			},
		},
		defaultVariants: {
			variant: "base",
			size: "small",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	buttonText?: string | ReactElement;
	deepClassName?: string;
	disabled?: boolean;
	loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			children,
			loading,
			buttonText,
			deepClassName,
			asChild = false,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				className={cn(
					buttonVariants({
						variant,
						size,
						className: `${className} ${deepClassName}`,
					})
				)}
				ref={ref}
				children={
					<>
						{loading ? (
							<div className="flex flex-row ">
							</div>
						) : (
							<div className="flex flex-row align-middle items-center">
								{buttonText && <>{buttonText}</>} {children}
							</div>
						)}
					</>
				}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button };
