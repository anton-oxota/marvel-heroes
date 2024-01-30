import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import ComicsPage from "./pages/ComicsPage/ComicsPage";
import SingleComicPage from "./pages/SingleComicPage/SingleComicPage";
import SingleCharPage from "./pages/SingleCharPage/SingleCharPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
	return (
		<div className="App">

			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<CharacterPage />} />
					<Route path="character/:characterId" element={<SingleCharPage />} />
					<Route path="comics" element={<ComicsPage />} />
					<Route path="comics/:comicId" element={<SingleComicPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>

		</div>
	);
}

export default App;
