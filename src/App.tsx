import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GeneralLayout, LoadingPage } from "components";
import "./scss/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
	const Homepage = lazy(() => import("screens/homepage/Homepage"));

	return (
		<Router>
			<Suspense fallback={<LoadingPage />}>
				<Switch>
					<Route
						path="/"
						exact
						render={(props) => (
							<GeneralLayout {...props}>
								<Homepage />
							</GeneralLayout>
						)}
					/>
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
