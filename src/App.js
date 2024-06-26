import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Reservations from "./pages/Reservations/Reservations";
import BookingConfirm from "./pages/BookingConfirm/BookingConfirm";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";

const App = () => {
	return (
		<div data-testid="app-component">
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/reservations" element={<Reservations />} />
						<Route path="/about" element={<UnderConstruction />} />
						<Route path="/menu" element={<UnderConstruction />} />
						<Route path="/orders" element={<UnderConstruction />} />
						<Route path="/login" element={<UnderConstruction />} />
						<Route path="/confirm-booking" element={<BookingConfirm />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
};

export default App;