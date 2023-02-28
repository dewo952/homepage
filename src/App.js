import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
