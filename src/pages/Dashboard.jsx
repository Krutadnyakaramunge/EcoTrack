import {useEffect, useState} from "react";
import "../App.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
function Dashboard() {
    const [result, setResult] = useState({
        electricity: 0,
        petrol: 0,
        diesel: 0,
        transport: 0,
        total: 0,
      });   
      useEffect(() => {
        const storedResult = localStorage.getItem("ecoTrackResult");
        if (storedResult) {
          setResult(JSON.parse(storedResult));
        }
      }, []);
      const hasResukt = result.total > 0;
const chartData = [
  { name: "Electricity",emissions: result.electricity },
  { name: "Petrol", emissions: result.petrol },     
    { name: "Diesel", emissions: result.diesel },
    { name: "Transport", emissions: result.transport },]
    return (
<section className="dashboard">
        <h2>📊 Dashboard</h2>
        <div className="dashboard-layout">
          <div className="side-cards">
          <div className="emission-card">
            <h3>Electricity</h3>    
            <p>{result.electricity.toFixed(2)}kg CO₂</p>
          </div>
          

      <div className="emission-card">
        <h3>🚗 Petrol</h3>
        <p>{result.petrol.toFixed(2)} kg CO₂</p>
      </div>

      <div className="emission-card">
        <h3>🛢️ Diesel</h3>
        <p>{result.diesel.toFixed(2)} kg CO₂</p>
      </div>

      <div className="emission-card">
        <h3>🚌 Transport</h3>
        <p>{result.transport.toFixed(2)} kg CO₂</p>
      </div>
    </div>

<div className="total-card">
      <h3>Total Carbon Emission</h3>
      <p>{result.total.toFixed(2)} kg CO₂</p>
    </div>
    </div>
        
        <div className="dashboard-chart">
          <h2>Carbon Emissions</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="emissions" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
  
      </section>
    );
}
export default Dashboard;
      