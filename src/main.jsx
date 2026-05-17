import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Router/Router.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#07070d] gap-4">
    <div
      className="h-10 w-10 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin"
      role="status"
      aria-label="Loading"
    />
    <p className="text-slate-400 text-sm font-medium">Loading portfolio…</p>
  </div>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<PageLoader />}>
      <ScrollToTop />
    </RouterProvider>
  </StrictMode>
);
