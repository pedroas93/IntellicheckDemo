/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { ErrorText } from "../ErrorText";
import { Label } from "../Label";
import { inputClassName } from "../../../utils/class-names";
import React from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: any;
	label?: string;
	register?: UseFormRegisterReturn;
	wrapperClassName?: string;
	readOnly?: boolean;
	onChange?: (value: any) => void;
}

export const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
	error,
	className = inputClassName(error),
	label,
	required,
	register,
	wrapperClassName,
	readOnly,
	onChange,
	...props
}) => (
	<div className={`flex flex-col gap-2 ${wrapperClassName}`}>
		<Label label={label} required={required} />

		<div className="relative">
			<input
				className={` input ${className} ${
					readOnly && "bg-white"
				}`}
				onChange={onChange}
				readOnly={readOnly}
				{...props}
				{...register}
			/>
		</div>

		<ErrorText error={error} />
	</div>
);
