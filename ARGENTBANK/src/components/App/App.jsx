import Home from "../../Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;