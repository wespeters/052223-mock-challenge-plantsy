import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(setPlants);
  }, []);

  const addPlant = (newPlant) => {
    setPlants(prevPlants => [...prevPlants, newPlant]);
  };

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage plants={filteredPlants} addPlant={addPlant} setSearch={setSearch} />
    </div>
  );
}

export default App;
