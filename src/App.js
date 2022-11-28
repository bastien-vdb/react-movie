import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import Search from './Pages/Search';
import Trends from './Pages/Trends';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route index path="trends" element={<Trends/>} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="search" element={<Search/>} />
          <Route path="*" element={<Trends />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
