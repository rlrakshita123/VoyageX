import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PlaceDetail from "./pages/PlaceDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RescheduleTrip from "./pages/RescheduleTrip";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard"; 
import BookingForm from "./pages/BookingForm";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/places/:id" element={<PlaceDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/book/:placeId" element={<BookingForm />} />
          

          <Route
            path="/reschedule/:tripId"
            element={
              <ProtectedRoute>
                <RescheduleTrip />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
