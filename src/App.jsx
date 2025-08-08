import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import RoomsPage from "./Pages/RoomsPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FullGallery from "./Pages/FullGallery";
import HotelChatBot from "./Pages/Chatbot";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import RoomDetails from "./Components/RoomsComponents/RoomDetails";

function App() {
  const location = useLocation();

  // Check if current path matches /room/:id
  const isRoomDetailsPage = location.pathname.startsWith("/room/");

  return (
    <>
      {!isRoomDetailsPage && <Navbar />}
      <ScrollToTop />
      {/* <HotelChatBot /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<FullGallery />} />
      </Routes>
      {!isRoomDetailsPage && <Footer />}
    </>
  );
}

export default App;
