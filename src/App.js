import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Nav from "./components/headers/Nav";
import UpperPart from "./components/upperParts/Index";
import BodyPart from "./components/bodyPart/Index";
import Footers from "./components/footers/Index";
import "./index.css";
function App() {
	return (
		<Provider store={store}>
			<Router>
				<Container>
					<Nav />
					<UpperPart />
					<BodyPart />
					<Footers />
				</Container>
			</Router>
		</Provider>
	);
}

export default App;
