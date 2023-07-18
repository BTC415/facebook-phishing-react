import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header";
import Submit from "./pages/Submit";
import Verification from "./pages/Verification";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/verification" element={<Verification/>}/>
          <Route path="*" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
