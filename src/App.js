import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Nav from "./components/Nav";
import Student from "./components/pages/Students";
import studentsData from './components/pages/Studentsdata';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard studentData={studentsData} />} />
          <Route path="/students/:symbol" element={<Student studentData={studentsData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
