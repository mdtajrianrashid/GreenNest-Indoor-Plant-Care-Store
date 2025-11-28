// src/routes/router.jsx
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import PlantDetails from "../pages/PlantDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import ProtectedRoute from "../components/ProtectedRoute";
import DynamicPage from "../pages/DynamicPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/plants", element: <Plants /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/about", element: <DynamicPage /> },
      { path: "/contact", element: <DynamicPage /> },
      { path: "/privacy-Policy", element: <DynamicPage /> },
// Protected Routes
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/profile", element: <Profile /> },
          { path: "/plants/:id", element: <PlantDetails /> },
        ],
      },
    ],
  },
]);