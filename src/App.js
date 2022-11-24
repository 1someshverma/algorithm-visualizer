import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nqueen from "./components/checkerboard/n-queen-comp";
import Home from "./components/home/home";
import Pathfinder from "./components/pathfinderComponents/pathfinder";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/nqueen" element={<Nqueen />}></Route>
          <Route exact path="/paths" element={<Pathfinder />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
