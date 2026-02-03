import { useEffect, useState } from "react";
import places from "../data/places.json";
import { getToken, getUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

  const user = getUser();
  const token = getToken();
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/trips/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTrips(data.trips || []));
  }, [token]);

  const today = new Date();

  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this trip?")) return;

  await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/trips/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  setTrips((prev) => prev.filter((t) => t._id !== id));
};


  const upcomingTrips = trips.filter(
    (t) => new Date(t.travelDate) >= today
  );

  const completedTrips = trips.filter(
    (t) => new Date(t.travelDate) < today
  );

  const sortedUpcoming = [...upcomingTrips].sort(
    (a, b) => new Date(a.travelDate) - new Date(b.travelDate)
  );

  const getPlace = (id) => places.find((p) => p.id === id);

  return (
    <div className="px-10 py-8 text-white">

      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, {user.username}
          </h1>
          <p className="text-slate-300 mt-1">
            Here’s your travel overview
          </p>
        </div>

        <div className="bg-white text-black p-4 rounded-xl shadow">
          <p className="font-semibold">{user.username}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
        <Stat title="Total Trips" value={trips.length} />
        <Stat title="Upcoming Trips" value={upcomingTrips.length} />
        <Stat title="Completed Trips" value={completedTrips.length} />
        <Stat
          title="Next Trip"
          value={
            sortedUpcoming[0]
              ? new Date(sortedUpcoming[0].travelDate).toLocaleDateString()
              : "-"
          }
        />
      </div>

      <Section title="Upcoming Trips">
        {upcomingTrips.length === 0 ? (
          <Empty />
        ) : (
          <TripGrid
            trips={sortedUpcoming}
            getPlace={getPlace}
            status="Upcoming"
            onReschedule={(id) => navigate(`/reschedule/${id}`)}
            onDelete={handleDelete}
          />

        )}
      </Section>

      <Section title="Completed Trips">
        {completedTrips.length === 0 ? (
          <p className="text-slate-400">No completed trips yet</p>
        ) : (
          <TripGrid
            trips={completedTrips}
            getPlace={getPlace}
            status="Completed"
          />
        )}
      </Section>
    </div>
  );
};

export default Dashboard;


const Stat = ({ title, value }) => (
  <div className="bg-white text-black p-6 rounded-xl shadow">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-16 border-b border-white/10 pb-10">
    <h2 className="text-2xl font-semibold mb-6">{title}</h2>
    {children}
  </div>
);

const TripGrid = ({ trips, getPlace, status, onReschedule, onDelete }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    {trips.map((trip) => {
      const place = getPlace(trip.placeId);

      return (
        <div
          key={trip._id}
          className="bg-white text-black rounded-xl shadow overflow-hidden
                     transition-transform hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative">
            <img
              src={place?.image || "/images/fallback.jpg"}
              alt={place?.name || "Trip"}
              className="h-48 w-full object-cover"
            />
            <span
              className={`absolute top-3 right-3 px-3 py-1 text-xs rounded-full
              ${
                status === "Upcoming"
                  ? "bg-blue-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {status}
            </span>
          </div>

          <div className="p-5 space-y-2">
            <h3 className="text-xl font-bold">{place?.name}</h3>
            <p>📅 {new Date(trip.travelDate).toLocaleDateString()}</p>
            <p>👥 {trip.peopleCount} people</p>
            <p>🍽 {trip.foodPreference}</p>
            <p>🧭 Guide: {trip.guide}</p>
          </div>

         <div className="mt-6 px-5 pb-5">
          <div className="flex gap-3">

            <button
              onClick={() => onReschedule(trip._id)}
              className="
                flex-1
                py-2
                rounded-md
                border border-slate-300
                text-slate-700
                font-medium
                hover:bg-slate-100
                transition
              "
            >
              Reschedule
            </button>

            <button
              onClick={() => onDelete(trip._id)}
              className="
                flex-1
                py-2
                rounded-md
                border border-red-300
                text-red-600
                font-medium
                hover:bg-red-50
                transition
              "
            >
              Delete
            </button>

          </div>
        </div>
      </div>
      );
    })}
  </div>
);

const Empty = () => (
  <div className="bg-white text-black p-8 rounded-xl shadow text-center">
    <p className="mb-4">No upcoming trips yet ✈️</p>
    <a href="/search" className="text-blue-500 font-semibold">
      Explore destinations →
    </a>
  </div>
);
