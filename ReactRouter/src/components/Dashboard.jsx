import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes

/**
 * Dashboard Component
 * Acts as a parent layout for nested routes like "Courses" and "MockTest".
 */
export const Dashboard = () => {
  return (
    <div>
      <div>Dashboard</div> {/* Static content of the Dashboard */}

      {/* 
        Outlet is a placeholder where child components (like Courses or MockTest) 
        will be rendered based on the nested route.
      */}
      <Outlet /> 
    </div>
  );
};
