import "./App.css";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./views/components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/pages/Home/Home";
import PorductDetails from "./views/pages/ProductDetails/ProductDetals";
import Login from "./views/pages/Authentication/Login/Login";
import Register from "./views/pages/Authentication/Register/Register";
import NotFound from "./views/pages/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider";

function App() {
	// Cart setup

	return (
		<AuthProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/productdetails/:index"
						element={<PorductDetails />}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
