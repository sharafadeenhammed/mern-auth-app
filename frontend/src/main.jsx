import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import { UserContextProvider } from "./context/UserContext.jsx";
import App from "./App.jsx";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";

// creating route handeler...
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    </Route>
  )
);

// mountin spa to the root element...
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={routes} />
    </UserContextProvider>
  </React.StrictMode>
);
