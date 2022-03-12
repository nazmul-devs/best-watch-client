import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./views/components/Header/Header";
import Products from "./views/components/Products/Products";

function App() {
	return (
		<div className="App">
			<Header />
			<Products />
		</div>
	);
}

export default App;
