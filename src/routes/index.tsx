import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Marketplace from "./pages/Marketplace";
import Overview from "./pages/Overview";
import Newsfeed from "./pages/Newsfeed";
import TakeARide from "./pages/TakeARide";
import ErrorPage from "./pages/ErrorPage";
import VendorCustomerMessagingApp from "./pages/VendorCustomerMessagingApp";
import ShoppingCart from "./pages/ShoppingCart";
import Products from "../components/Products";
import NotificationsPage from "./pages/NotificationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Newsfeed />,
      },
      {
        path: "marketplace",
        element: <Marketplace />,
      },
      {
        path: "overview",
        element: <Overview/>,
      },
      {
        path: "take-a-ride",
        element: <TakeARide />,
      },
      {
        path: "message",
        element: <VendorCustomerMessagingApp />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "products",
        element: <Products/>,
      },
      {
        path: "notifications",
        element: <NotificationsPage/>,
      },
    ],
  },
]);