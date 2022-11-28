import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import Search from './Pages/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route index element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="search" element={<Search/>} />
          <Route path="*" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
