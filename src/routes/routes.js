import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import AboutPage from "../components/About/AboutPage";
import App from "../App";
import ServicePage from "../components/Service/Servicepage";
import WorkPage from "../components/Work/WorkPage";
import NewsPage from "../components/News/NewsPage";
import ContactPage from "../components/Contacts/ContactsPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/about",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/service",
    element: <App />,
    children: [
      {
        path: "/service",
        element: <ServicePage />,
      },
    ],
  },
  {
    path: "/work",
    element: <App />,
    children: [
      {
        path: "/work",
        element: <WorkPage />,
      },
    ],
  },
  {
    path: "/news",
    element: <App />,
    children: [
      {
        path: "/news",
        element: <NewsPage />,
      },
    ],
  },
  {
    path: "/contacts",
    element: <App />,
    children: [
      {
        path: "/contacts",
        element: <ContactPage />,
      },
    ],
  },
]);
