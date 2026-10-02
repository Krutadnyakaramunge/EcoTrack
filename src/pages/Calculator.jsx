import { useState} from "react";
import '../App.css';

function Calculator() {
  const [electricity, setElectricity] = useState("");
  const [petrol, setPetrol] = useState("");
  const [diesel, setDiesel] = useState("");
  const [transport, setTransport] = useState("");

  const [result, setResult] = useState({
    electricity: 0,
    petrol: 0,
    diesel: 0,
    transport: 0,
    total: 0,
  });

  const calculateCO2 = () => {
    const electricityCO2 = Number(electricity) * 0.82;
    const petrolCO2 = Number(petrol) * 2.31;
    const dieselCO2 = Number(diesel) * 2.68;
    const transportCO2 = Number(transport) * 0.1;

    const total = electricityCO2 + petrolCO2 + dieselCO2 + transportCO2;
    localStorage.setItem("ecoTrackResult", JSON.stringify({
        electricity: electricityCO2,
        petrol: petrolCO2,
        diesel: dieselCO2,
        transport: transportCO2,
        total: total,
      }));  
    setResult({
      electricity: electricityCO2,
      petrol: petrolCO2,
      diesel: dieselCO2,
      transport: transportCO2,
      total: total,
    });
  };

    return (
        <div>
            <section className="calculator">
                <h2>Carbon Footprint Calculator</h2>
                <input type="number" placeholder="Electricity (kWh)" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
                <input type="number" placeholder="Petrol (liters)" value={petrol} onChange={(e) => setPetrol(e.target.value)} />
                <input type="number" placeholder="Diesel (liters)" value={diesel} onChange={(e) => setDiesel(e.target.value)} />
                <input type="number" placeholder="Transport (km)" value={transport} onChange={(e) => setTransport(e.target.value)} />
                <button onClick={calculateCO2}>Calculate CO2 </button>
                {result.total > 0 && (
                    <div style={{ marginTop: '20px', padding: '15px', background: '#e6f7f5', borderRadius: '8px', textAlign: 'left', color: '#1b4332' }}>
                        <h3 style={{ margin: '0 0 10px 0', textAlign: 'center' }}>Total Emissions: {result.total.toFixed(2)} kg CO₂</h3>
                        <p style={{ margin: '5px 0' }}>⚡ Electricity: {result.electricity.toFixed(2)} kg</p>
                        <p style={{ margin: '5px 0' }}>🚗 Petrol: {result.petrol.toFixed(2)} kg</p>
                        <p style={{ margin: '5px 0' }}>🛢️ Diesel: {result.diesel.toFixed(2)} kg</p>
                        <p style={{ margin: '5px 0' }}>🚌 Transport: {result.transport.toFixed(2)} kg</p>
                    </div>
                )}
                </section>
                </div>
    );
}
    export default Calculator;