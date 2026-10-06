import { Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import CustomerDashboard from "./pages/customer_dashboard"; // Assuming you saved it here
import ProviderDashboard from "./pages/provider_dashboard";
import "./index.css";


function App() {
  return (
    <div className="app">
      <Header />

      {/* This will be the switchboard: one block will show at a time */}
      <Routes>
        {/* This is for just a normal / and it will show the home page */}
        <Route path="/" element={<Home />} />

        {/* This is for the signup page */}
        <Route path="/signup" element={<SignUp />} />

        {/* This is for the login page */}
        <Route path="/login" element={<Login />} />

        {/* This is for the dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Customer*/}
        <Route path="/customer_dashboard" element={<CustomerDashboard />} />
        {/* Provider*/}
        <Route path="/provider_dashboard" element={<ProviderDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

// don't touch this file for now, we will add more pages
