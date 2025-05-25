import "./App.css";
import Landing from "./components/Landing";
import LegalAdvice from "./components/LegalAdvice";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PracticeAreas from "./pages/PracticeAreas";
import Attorneys from "./pages/Attorneys";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import CreateProfile from "./pages/CreateProfiles";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/update-profile" element={<UpdateProfile />} />;
        <Route
          path="/create-profile"
          element={isLoggedIn ? <CreateProfile /> : <Navigate to="/login" />}
        />
        <Route path="/attorneys" element={<Attorneys />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/" element={<Landing />} />
        <Route path="/legal-advice" element={<LegalAdvice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profiles" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
