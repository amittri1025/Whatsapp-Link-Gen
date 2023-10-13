import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import MainBody from './components/MainBody';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <HeroSection/>
       <MainBody/>
    </div>
  );
}

export default App;
