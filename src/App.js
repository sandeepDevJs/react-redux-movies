import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthProvider from "./contexts/authContext";
import Nav from "./components/headers/Nav";
import UpperPart from "./components/upperParts/Index";
import BodyPart from "./components/bodyPart/Index";
import Footers from "./components/footers/Index";
import MovieInfoScreen from "./screens/MovieInfoScreen";
import "./index.css";
function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Nav />
					<UpperPart />
					<Route exact path="/" component={BodyPart} />
					<Route path="/movieinfo/:mid" component={MovieInfoScreen} />
					<Footers />
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
