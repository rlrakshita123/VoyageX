import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getToken } from "../utils/auth";

const RescheduleTrip = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const token = getToken();

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    travelDate: "",
    peopleCount: 1,
    foodPreference: "Veg",
    guide: "No",
    notes: "",
  });

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/v1/trips/${tripId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (!res.ok) {
          alert(data.error || "Failed to load trip");
          return;
        }

        const trip = data.trip;

        setForm({
          travelDate: trip.travelDate?.split("T")[0],
          peopleCount: trip.peopleCount,
          foodPreference: trip.foodPreference,
          guide: trip.guide,
          notes: trip.notes || "",
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        alert("Server error");
      }
    };

    fetchTrip();
  }, [tripId, token]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/trips/${tripId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Update failed");
        return;
      }

      navigate("/dashboard");
    } catch (err) {
      alert("Server error");
    }
  };

  if (loading) {
    return (
      <div className="text-center text-white mt-20">
        Loading trip details...
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-16 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Reschedule Trip
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="date"
          name="travelDate"
          value={form.travelDate}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="number"
          name="peopleCount"
          min="1"
          value={form.peopleCount}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <select
          name="foodPreference"
          value={form.foodPreference}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Both">Both</option>
        </select>
        <select
          name="guide"
          value={form.guide}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          placeholder="Special requests"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Update Trip
        </button>
      </form>
    </div>
  );
};

export default RescheduleTrip;
