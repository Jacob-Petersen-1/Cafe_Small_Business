// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage"
import LandingPage from "./pages/LandingPage/LandingPage";
import EventPage from "./pages/EventPage/EventPage";
import ServicePage from "./pages/ServicePage/ServicePage"

// Component Imports

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/owner"
          element={
            <PrivateRoute>
              <DashBoardPage/>
            </PrivateRoute>
          }
        />
        <Route path="/events" element = {<EventPage/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App;
