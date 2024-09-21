import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Bookingpage from "./components/BookingPage";
import ConfirmationPage from "./components/ConfirmationPage";

export default function () {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      {/* <Route element={<Bookingpage />} path="/bookings" /> */}
      {/* <Route element={<ConfirmationPage />} path="/confirmation" /> */}
    </Routes>
  );
};