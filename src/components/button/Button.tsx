import { FC, ReactNode } from "react";

type Props = {
	btnType?: "primary" | "secondary" | "transaparent";
	className?: string;
	text: ReactNode;
} & (
	| {
			kind: "link";
			to: string;
			target?: string;
	  }
	| {
			kind: "button";
			onClick: () => void;
			type?: "submit" | "button" | "reset";
	  }
);

export const Button: FC<Props> = (props) => {
	const { className, btnType, text } = props;
	switch (props.kind) {
		case "button":
			const { onClick, type } = props;
			return (
				<button
					className={`button ${btnType} ${className || ""}`}
					type={type}
					onClick={onClick}
				>
					{text}
				</button>
			);

		case "link":
			const { to, target } = props;
			return (
				<a
					href={to}
					role="button"
					className={`button ${btnType}  ${className || ""}`}
					target={target}
					rel={target ? "noopener noreferrer" : undefined}
				>
					{text}
				</a>
			);

		default:
			return null;
	}
};
