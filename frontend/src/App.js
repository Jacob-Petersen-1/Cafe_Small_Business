// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage"
import LandingPage from "./pages/LandingPage/LandingPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

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
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
