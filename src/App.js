import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Notfound from "./pages/notfound.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Notfound />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
