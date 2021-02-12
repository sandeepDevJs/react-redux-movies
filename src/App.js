import React from "react";
import Container from "./components/Container";
import Nav from "./components/headers/Nav";
import UpperPart from "./components/upperParts/Index";
import BodyPart from "./components/bodyPart/Index";
import "./index.css";
function App() {
	return (
		<Container>
			<Nav />
			<UpperPart />
			<BodyPart />
		</Container>
	);
}

export default App;
