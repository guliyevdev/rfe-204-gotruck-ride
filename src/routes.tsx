import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import MapPage from "./pages/map";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <BrowserRouter><MapPage /></BrowserRouter>
    },
  ]);