import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Movies from './Pages/Movies';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Movies/>
    </div>
  );
}

export default App;
