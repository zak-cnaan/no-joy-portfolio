import { RouterProvider } from "react-router-dom";

// Layouts
import NoLayout from "../layouts/NoLayout";
import Layout from "../layouts/Layout";

// Pages
import About from "../pages/About";
import Home from "../pages/Home";
import Sink from "../pages/Sink";
import Spaces from "../pages/Spaces";

import { createBrowserRouter } from "react-router-dom";
import Paths from "./Paths";

const router = createBrowserRouter([
  // {
  //   element: <LayoutWithHero />,
  //   children: [
  //     {
  //       index: true,
  //       path: Paths.Home,
  //       element: <Home />,
  //     },
  //   ],
  // },
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: Paths.Home,
        element: <Home />,
      },
      {
        path: Paths.Sink,
        element: <Sink />,
      },
    ],
  },
  {
    element: <NoLayout />,
    children: [
      {
        path: Paths.About,
        element: <About />,
      },
      {
        path: Paths.Spaces,
        element: <Spaces />,
      },
    ],
  },
]);

// const _router_example = createBrowserRouter([
//   {
//     element: <NoLayout />,
//     children: [
//       {
//         element: <Layout />,
//         children: [
//           {
//             index: true,
//             path: "/",
//             element: <Home />,
//           },
//           {
//             path: "/sink",
//             element: <Sink />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/about",
//         element: <About />,
//       },
//     ],
//   },
//   {
//     element: <NoLayout />,
//     children: [
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/spaces",
//         element: <Spaces />,
//       },
//     ],
//   },
// ]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
