import React from "react";
import ReactDOM from "react-dom/client"; //recent change to add client at the end to import react-dom
import Header, { Title } from "./components/Header";
import Body from "./components/body";
import Footer from "./components/Footer";

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

// Config Driven UI

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); //functionl component
