import "./styles.css";

import NavBar from "./components/NavBar";
import PostList from "./components/PostList";
import { ScrollToTopControlller } from "./components/ScrollTopButton";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<NavBar />
				<PostList />
				<ScrollToTopControlller />
			</div>
		</ThemeProvider>
	);
}

export default App;
