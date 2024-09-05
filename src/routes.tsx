import { createBrowserRouter } from "react-router-dom";
import MapPage from "./pages/map";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <MapPage />,
      index: true,
    },
  ]);