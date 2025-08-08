import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import RoomsPage from "./Pages/RoomsPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FullGallery from "./Pages/FullGallery";
import HotelChatBot from "./Pages/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <HotelChatBot />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<FullGallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
