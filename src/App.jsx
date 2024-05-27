import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/navbar";
import MovieList from "./pages/movielist";
import FavoriteList from "./pages/faviratelist";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/favorites" element={<FavoriteList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
