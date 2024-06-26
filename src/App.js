import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<div data-testid="app-component">
			<BrowserRouter>
				<Layout>
				</Layout>
			</BrowserRouter>
		</div>
	);
};

export default App;