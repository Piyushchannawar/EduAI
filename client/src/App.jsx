import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import { RouterProvider } from "react-router";
import Courses from "./pages/student/Courses";
import Mylearning from "./pages/student/Mylearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/AddCourse";

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
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <Mylearning />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      // admin routes
      {
        path: "admin",
        element: <Sidebar />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          },
          {
            path: "course",
            element: <CourseTable />
          },
          {
            path: "course/create",
            element: <AddCourse />
          }
        ]
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
