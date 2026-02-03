import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import placesData from "../data/places.json";
import { getUser, getToken, isLoggedIn } from "../utils/auth";
import { useLocation } from "react-router-dom";

const BookingForm = () => {
  const [loading, setLoading] = useState(false);
  const { placeId } = useParams();
  const navigate = useNavigate();

  const place = placesData.find((p) => p.id === placeId);

  

const location = useLocation();

useEffect(() => {
  if (!isLoggedIn()) {
    navigate("/signup", {
      state: { from: location.pathname },
    });
  }
}, [navigate, location]);

  const user = getUser();
  const token = getToken();

  const [form, setForm] = useState({
    fullName: "",
    email: user?.email || "",
    travelDate: "",
    peopleCount: 1,
    foodPreference: "Veg",
    guide: "No",
    notes: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");
  setLoading(true);

  try {
    const res = await fetch("http://localhost:5000/api/v1/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        placeId,
        ...form,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setLoading(false);
      return setError(data.error || "Booking failed");
    }

    setSuccess("Trip booked successfully!");
    setTimeout(() => navigate("/dashboard"), 1000);
  } catch {
    setError("Server error");
  } finally {
    setLoading(false);
  }
};


  if (!place) {
    return (
      <div className="text-center mt-10 text-xl text-red-500">
        Place not found
      </div>
    );
  }

  return (
  <div className="max-w-lg mx-auto mt-10 px-6 py-8 shadow-xl rounded-xl bg-white">
    <h2 className="text-2xl font-bold mb-6 text-center">
      Book Trip for {place.name}
    </h2>

    {error && <p className="text-red-500 text-center">{error}</p>}
    {success && <p className="text-green-600 text-center">{success}</p>}

    <form className="space-y-5" onSubmit={handleSubmit}>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Travel Date
        </label>
        <input
          type="date"
          name="travelDate"
          value={form.travelDate}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Number of Travelers
        </label>
        <input
          type="number"
          name="peopleCount"
          min="1"
          value={form.peopleCount}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Food Preference
        </label>
        <select
          name="foodPreference"
          value={form.foodPreference}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        >
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Both">Both</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Guide Required
        </label>
        <select
          name="guide"
          value={form.guide}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Special Requests (optional)
        </label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          placeholder="Any special requests..."
        />
      </div>
<button
  type="submit"
  disabled={loading}
  className={`w-full py-2 rounded transition ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-500 hover:bg-blue-600 text-white"
  }`}
>
  {loading ? "Booking..." : "Submit Booking"}
</button>


    </form>
  </div>
);

};

export default BookingForm;
