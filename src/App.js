import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// AS is used for giving a short name. for comfort
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./utils/scrollToTop";
// pages
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
