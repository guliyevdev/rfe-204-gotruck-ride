import { createBrowserRouter } from "react-router-dom";
import { RidePage } from "./pages/ride/ride";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <RidePage />,
      index: true,
    },
  ]);