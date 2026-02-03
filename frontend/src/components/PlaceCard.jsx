import { useNavigate } from "react-router-dom";

const PlaceCard = ({ place }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/places/${place.id}`)}
      className="cursor-pointer rounded-xl overflow-hidden shadow-lg group transition hover:scale-105"
    >
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 bg-white text-gray-800">
        <h3 className="text-lg font-semibold">{place.name}</h3>
        <p className="text-sm text-gray-600 capitalize">{place.type}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
