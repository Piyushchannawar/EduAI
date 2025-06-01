import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import { RouterProvider } from "react-router";
import Courses from "./pages/student/Courses";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
           <Courses />
          </>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      }
    ],
  },
]);

function App() {
  return (
    <main>
     <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
