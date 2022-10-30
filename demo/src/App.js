import logo from "./logo.svg";
import "./App.css";
import RegisterScreen from "./Screens/signup";

function App() {
return (
	<div className="App">

		<RegisterScreen/>	


		<form action="../../post" method="post"
			className="form">
		<button type="submit">Connected?</button>
		</form>
	</div>
);
}

export default App;
