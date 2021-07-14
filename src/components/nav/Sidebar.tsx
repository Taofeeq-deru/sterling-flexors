import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../index";
import { cancel } from "icons";
import { form, whatsapp } from "utilities/constants";

type Props = {
	sidebar: boolean;
	close: () => void;
};

export const Sidebar: FC<Props> = ({ sidebar, close }) => {
	return (
		<div
			className={`sidebar h-screen fixed right-0 top-0 bottom-0 z-50 ${
				sidebar ? "w-56 block" : "hidden"
			}`}
			onClick={(e: any) => e.stopPropagation()}
		>
			<div className="h-full pl-4 pr-10 flex flex-col">
				<span className={`my-5 ${sidebar ? "self-end" : ""}`} onClick={close}>
					{cancel}
				</span>
				<NavLink
					to="/"
					className="my-4 nav-link"
					// activeClassName="active"
					onClick={close}
				>
					How it works
				</NavLink>
				<NavLink
					to="/"
					className="my-4 nav-link"
					// activeClassName="active"
					onClick={close}
				>
					Pricing
				</NavLink>
				<NavLink
					to="/"
					className="my-4 nav-link"
					// activeClassName="active"
					onClick={close}
				>
					About us
				</NavLink>
				<Button
					text="Free consultation"
					kind="link"
					btnType="transaparent"
					className="my-4"
					to={whatsapp}
					target="_whatsapp"
				/>
				<Button
					text="Get Started"
					kind="link"
					btnType="secondary"
					to={form}
					target="_form"
					className="text-center"
				/>
			</div>
		</div>
	);
};
