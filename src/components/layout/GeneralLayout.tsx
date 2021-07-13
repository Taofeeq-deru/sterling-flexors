import { FC, useState } from "react";
import { Nav, Sidebar } from "components";

export const GeneralLayout: FC = ({ children }) => {
	const [sidebar, setSidebar] = useState(false);

	return (
		<div onClick={() => setSidebar(false)}>
			<Nav openSidebar={() => setSidebar(true)} />
			<Sidebar sidebar={sidebar} close={() => setSidebar(false)} />
			<div id="content">{children}</div>
		</div>
	);
};
