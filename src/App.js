import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import NoPage from "./NoPage";
import Blog from "./Blog";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}