import { RouterProvider } from "react-router-dom";

// Layouts
import NoLayout from "../layouts/NoLayout";
import Layout from "../layouts/Layout";

// Pages
import About from "../pages/About";
import Home from "../pages/Home";
import Sink from "../pages/Sink";
import Spaces from "../pages/github-spaces/Spaces";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element:<NoLayout />,
    children:[
      {
      path:'/about',
      element:<About />

      },
      {
        path:'/spaces',
        element:<Spaces />
      }
    ]
  },
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/sink",
        element: <Sink />,
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
