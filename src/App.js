import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
	return (
		<div data-testid="app-component">
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Homepage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
};

export default App;