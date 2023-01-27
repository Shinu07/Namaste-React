import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"; //recent change to add client at the end to import react-dom
import Header from "./components/Header";
import Body from "./components/body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/profile";
import Shimmer from "./components/Shimmer";
// import InstaMart from "./components/Instamart";
/**
       * Header
       *   -Logo
           -NavBar
       *        -List Items(RightSides)
       *        -cart
       * Body
       *    -Search Bar
       *    -RestrauntList  
       *    -RestruantCard
       *          -Image
       *          -Name
       *          -cusins
       *          -Rating
       * Footer
      */

const InstaMart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
// Config Driven UI

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

//always create below this

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>

          //when it takes time to load it show msg in <Suspense> element Loading...
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); //functionl component
