import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addPlant, setSearch }) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearch={setSearch} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
