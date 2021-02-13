import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Container from "./components/Container";
import Nav from "./components/headers/Nav";
import UpperPart from "./components/upperParts/Index";
import BodyPart from "./components/bodyPart/Index";
import "./index.css";
function App() {
	return (
		<Provider store={store}>
			<Container>
				<Nav />
				<UpperPart />
				<BodyPart />
			</Container>
		</Provider>
	);
}

export default App;
