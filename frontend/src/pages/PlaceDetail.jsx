import { useParams, useNavigate } from "react-router-dom";
import placesData from "../data/places.json";

const PlaceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = placesData.find((p) => p.id === id);

  if (!place) {
    return <div className="p-10 text-center text-xl">Place Not Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">
     
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-80 object-cover rounded-2xl shadow-lg"
      />

      <h1 className="text-4xl font-bold mt-6 text-white">{place.name}</h1>
      <p className="text-lg text-slate-300 capitalize mt-1">{place.type}</p>

   
      <p className="mt-6 text-slate-200 text-base leading-relaxed">
        {place.details}
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-white">Highlights</h2>
        <ul className="list-disc list-inside mt-2 text-slate-300">
          {place.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-8 mt-6">
        <p className="font-semibold text-white">
          Suggested Duration:{" "}
          <span className="text-slate-300">{place.duration}</span>
        </p>
        <p className="font-semibold">
          Estimated Price:{" "}
          <span className="text-slate-300">{place.price}</span>
        </p>
      </div>
      <div className="flex gap-4 mt-10">
        <button
          onClick={() => navigate("/search")}
          className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition"
        >
          ← Back to Explore
        </button>

        <button
          onClick={() => navigate(`/book/${place.id}`)}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
        >
          Book Trip Now
        </button>
      </div>
    </div>
  );
};

export default PlaceDetail;
