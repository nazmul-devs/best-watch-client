// external imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
// routes
import Admin from "./views/pages/Admin/Admin";
import AddService from "./views/pages/AddService/AddService";
import AuthProvider from "./contexts/AuthProvider";
import Checkout from "./views/pages/Checkout/Checkout";
import Details from "./views/pages/Details/Details";
import Footer from "./views/components/Footer/Footer";
import Header from "./views/components/Header/Header";
import Home from "./views/pages/Home/Home";
import Login from "./views/pages/Authentication/Login/Login";
import MyOrders from "./views/pages/MyOrders/MyOrders";
import NotFound from "./views/pages/NotFound/NotFound";
import PrivateRoute from "./views/pages/PrivateRoute/PrivateRoute";
import Products from "./views/components/Products/Products";
import Register from "./views/pages/Authentication/Register/Register";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/addService" element={<AddService />} />
					<Route
						path="/checkout"
						element={
							<PrivateRoute>
								<Checkout />
							</PrivateRoute>
						}
					/>
					<Route path="/login" element={<Login />} />

					<Route
						path="/myorders"
						element={
							<PrivateRoute>
								<MyOrders />
							</PrivateRoute>
						}
					/>
					<Route path="/productdetails/:id" element={<Details />} />
					<Route path="/register" element={<Register />} />
					<Route path="/services" element={<Products />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
