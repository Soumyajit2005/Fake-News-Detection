import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Detection from "./pages/Detection";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<> <NavBar/><Home/> </>
    },
    {
      path:"/detection",
      element: <><NavBar/><Detection /></>,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
