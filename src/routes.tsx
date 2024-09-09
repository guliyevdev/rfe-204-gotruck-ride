import { createBrowserRouter } from "react-router-dom";
import MapPage from "./pages/map";
import { RidePage } from "./pages/ride";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <RidePage />,
      index: true,
    },
  ]);