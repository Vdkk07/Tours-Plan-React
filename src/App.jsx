import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h1>No tours available</h1>

        <button className="btn-refresh" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </>
  );
}

export default App;
