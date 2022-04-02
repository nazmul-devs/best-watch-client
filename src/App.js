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
import Footer from "./views/components/Footer/Footer";
import Products from "./views/components/Products/Products";
import MyOrder from "./views/pages/MyOrder/MyOrder";
import Checkout from "./views/pages/Checkout/Checkout";

function App() {
	// Cart setup

	return (
		<AuthProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Products />} />
					<Route path="/myorder" element={<MyOrder />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route
						path="/productdetails/:index"
						element={<PorductDetails />}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
