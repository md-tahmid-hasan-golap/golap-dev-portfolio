import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Router/Router.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>}>
      <ScrollToTop />
    </RouterProvider>
  </StrictMode>
);
