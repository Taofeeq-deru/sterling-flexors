import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../index";
import { menu } from "icons";

type Props = {
	openSidebar: () => void;
};

export const Nav: FC<Props> = ({ openSidebar }) => {
	return (
		<nav className="sticky">
			<div className="py-5 px-10 flex justify-between items-center">
				<NavLink to="/">
					<img src="images/logo.png" alt="sterling flexors" />
				</NavLink>
				<div className="nav-text hidden lg:flex items-center">
					<NavLink
						to="/"
						className="mx-4 nav-link"
						// activeClassName="active"
					>
						How it works
					</NavLink>
					<NavLink
						to="/"
						className="mx-4 nav-link"
						// activeClassName="active"
					>
						Pricing
					</NavLink>
					<NavLink
						to="/"
						className="mx-4 nav-link"
						// activeClassName="active"
					>
						About us
					</NavLink>
				</div>
				<div className="nav-buttons hidden lg:flex items-center">
					<Button
						text="Free consultation"
						kind="link"
						btnType="transaparent"
						className="mr-2"
						to="https://wa.me/2348140192982"
						target="_whatsapp"
					/>
					<Button
						text="Get Started"
						kind="link"
						btnType="secondary"
						to="http://bit.ly/3oLLhZe"
						target="_form"
					/>
				</div>
				<div className="flex items-center lg:hidden">
					<span
						onClick={(e: any) => {
							e.stopPropagation();
							openSidebar();
						}}
					>
						{menu}
					</span>
				</div>
			</div>
		</nav>
	);
};