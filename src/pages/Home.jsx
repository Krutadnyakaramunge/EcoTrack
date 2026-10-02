import "../App.css";
import react from "react;


function Home() {
  return (
    <div className="home">
        <section className= "home">
            <h2>Track Your Carbon Footprint</h2>
            <p> Monitor your carbon emissions and take steps 
                toward a cleaner and sustainable future.
            </p>
        </section>
        <section className="home-content">
        <h2> Welcome to EcoTrack</h2>
        <p>EcoTrack is a sustainability platform that helps you 
            monitor, analyze and reduce your carbon footprint.
        </p>
        <div className= "home-cards">
            < div className ="home-card">
            <h3>Monitor</h3>
            <p>Track your electricity, transport and other carbon emissions.</p>
        </div>
        <div className ="home-card">
            
        <h3> Analyze</h3>
            <p>View your carbon footprint data and sustainability  analytics. </p>
        </div>
        <div className ="home-card">
            <h3>Improve</h3>
            <p>Get useful tips and make eco-friendly
                choices to reduce emissions.

            </p>
        </div>
            </div>
            </section>

            </div>

  );
}
export default Home;
    