import { RouterProvider } from "react-router";
import Paths from "./routes/Paths";

const App = () => {
  return (
    <>
      <RouterProvider router={Paths}></RouterProvider>
    </>
  );
}

export default App;