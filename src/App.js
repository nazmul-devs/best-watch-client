import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./views/components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/pages/Home/Home";
import PorductDetails from "./views/pages/ProductDetails/ProductDetals";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/productdetails/:index" element={<PorductDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
