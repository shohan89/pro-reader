import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Books from "./Books";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage />
  },
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/books',
        element: <Books />,
        loader: () => {
          return fetch( 'https://api.itbook.store/1.0/new' );
        }
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

export default router;