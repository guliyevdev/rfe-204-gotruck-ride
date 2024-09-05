import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <>
    <p>Hello</p>
    <RouterProvider router={routes}/>
    </>
  );
}

export default App;
