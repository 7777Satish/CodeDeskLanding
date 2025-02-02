import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import NoPage from "./NoPage";
import AdminPanel from "./AdminPanel";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}