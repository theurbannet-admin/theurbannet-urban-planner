// components/Dashboard.jsx
import { useState, useEffect } from "react";
import CustomerDashboard from "./customer_dashboard";
import ProviderDashboard from "./provider_dashboard";

function DashboardRouter() {
  // In a real app, you would get this from your Auth Context or decoded JWT.
  // For now, we will simulate grabbing the user's role from localStorage.
  const [userRole, setUserRole] = useState("customer"); 

  useEffect(() => {
    // When the user logged in, you hopefully saved their user_type to localStorage
    const savedRole = localStorage.getItem("userRole"); 
    
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  // The Traffic Cop Logic:
  if (userRole === "provider") {
    return <ProviderDashboard />;
  }

  // Default fallback is the Customer Workspace
  return <CustomerDashboard />;
}

export default DashboardRouter;