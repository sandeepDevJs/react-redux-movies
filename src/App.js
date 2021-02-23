import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Nav from "./components/headers/Nav";
import UpperPart from "./components/upperParts/Index";
import BodyPart from "./components/bodyPart/Index";
import Footers from "./components/footers/Index";
import "./index.css";
function App() {
	return (
		<Router>
			<Container>
				<Nav />
				<UpperPart />
				<Route path="/" component={BodyPart} />
				<Footers />
			</Container>
		</Router>
	);
}

export default App;
