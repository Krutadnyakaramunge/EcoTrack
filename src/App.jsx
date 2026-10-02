import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Calculator from "./pages/Calculator";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Tips from "./pages/Tips";  
function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <header>
        <h1>🌱 EcoTrack</h1>
<p>Carbon Footprint Monitoring & Sustainability Analytics</p>

<nav>
  <Link to="/">Home</Link><br></br>
  <Link to="/calculator">Calculator</Link><br></br>
  <Link to="/dashboard">Dashboard</Link><br></br>
  <Link to="/analytics">Analytics</Link><br></br>
  <Link to="/tips">Tips</Link>
</nav>
<section className="hero">
        <h2>Track Your Carbon Footprint</h2>
        <p>
          Calculate your daily CO₂ emissions and take steps toward
          a sustainable future.
        </p>
      </section>
      </header>


      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/tips" element={<Tips />} /> 
      </Routes>
      <footer>
        <p> @ 2026 EcoTrack | Sustainability Analytics</p>
      </footer>
      </div>
</BrowserRouter>
  );
}
export default App;

