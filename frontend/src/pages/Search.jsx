import { useState, useEffect } from "react";
import placesData from "../data/places.json";
import PlaceCard from "../components/PlaceCard";
import FilterBar from "../components/FilterBar";
import Navbar from "../components/Navbar";

const Search = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (selectedFilter === "all") {
      setPlaces(placesData);
    } else {
      const filtered = placesData.filter(
        (p) => p.type === selectedFilter
      );
      setPlaces(filtered);
    }
  }, [selectedFilter]);
  

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Explore Places
      </h2>
      <FilterBar selected={selectedFilter} setSelected={setSelectedFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
    
  );
};

export default Search;
