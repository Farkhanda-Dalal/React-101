import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import React Router functions

// Importing all the necessary components for routing
import Home from "./components/Home";
import About from "./components/About";
import { Dashboard } from "./components/Dashboard";
import Navbar from "./components/Navbar";
import PrintId from "./components/PrintId";
import Courses from "./components/Courses";
import MockTest from "./components/MockTest";

/**
 * Creating a router using `createBrowserRouter`
 * This defines the different routes and their corresponding components.
 */
const router = createBrowserRouter([
  {
    path: "/", // Root route
    element: (
      <div>
        <Navbar /> {/* Common navigation bar */}
        <Home /> {/* Home page component */}
      </div>
    ),
  },
  {
    path: "/about", // About page route
    element: (
      <div>
        <Navbar />
        <About /> {/* About page component */}
      </div>
    ),
  },
  {
    path: "/dashboard/", // Dashboard route (acts as a parent for nested routes)
    element: (
      <div>
        <Navbar />
        <Dashboard /> {/* Parent component for nested routes */}
      </div>
    ),
    children: [
      {
        path: "courses", // Relative path (correct way to nest inside /dashboard)
        element: <Courses />, // Courses component inside Dashboard
      },
      {
        path: "mock", // Another nested route under /dashboard
        element: <MockTest />, // MockTest component inside Dashboard
      },
    ],
  },
  {
    path: "/:id", // Dynamic route that captures a parameter (e.g., /123, /abc)
    element: (
      <div>
        <Navbar />
        <PrintId /> {/* Component that receives the dynamic ID */}
      </div>
    ),
  },
  {
    path: "*", // Catch-all route for undefined paths (404 Not Found page)
    element: (
      <div>
        404 Not Found {/* Message for invalid routes */}
      </div>
    ),
  },
]);

/**
 * Main App component
 * Uses `RouterProvider` to provide the router to the application.
 */
const App = () => {
  return (
    <>
      <RouterProvider router={router} /> {/* Enables routing in the app */}
    </>
  );
};

export default App;
