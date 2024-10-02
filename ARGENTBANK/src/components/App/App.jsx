import Home from "../../Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import SignIn from "../../Pages/Sign-in/Sign-in";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;