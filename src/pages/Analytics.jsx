import{
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import "../App.css";

function Analytics() {
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
    const data = [
        { name: "Electricity", value: result.electricity },
        { name: "Petrol", value: result.petrol },
        { name: "Diesel", value: result.diesel },
        { name: "Transport", value: result.transport },
    ];
  return (
    <section className="chart">
      <h2>📊 Emission Analytics</h2>
      
<ResponsiveContainer width="100%" height={400}>
  <BarChart data ={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" />
  </BarChart>
</ResponsiveContainer>
    </section>
  );
}
export default Analytics;