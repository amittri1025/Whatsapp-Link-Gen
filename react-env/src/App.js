import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Contact from './pages/contact';


function App() {
  
  return (
<Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        </div>
    </Router>
  );
}



export default App;
