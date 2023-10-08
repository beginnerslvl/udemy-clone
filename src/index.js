import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SidebarProvider } from "./context/sidebar_context";
import { CoursesProvider } from "./context/courses_context";
import { CartProvider } from "./context/cart_context";
import  config from './utils/config';
const design = config.design.map(item => item.label);

// const color1 = design[0]
// const color2 = design[1]
// const color3 = design[2]
const color1 = "white"
const color2 = "white"
const color3 = "white"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Define and apply CSS variables
const setRootCSSVariables = () => {
  // Access the root element to set CSS variables
  const root = document.documentElement;

  // Define your CSS variable values
  root.style.setProperty("--primaryColor", 'white');
  root.style.setProperty("--primaryColor1", 'white');
  root.style.setProperty("--primaryColor2", 'white');
  // root.style.setProperty("--clr-primary", "#ad49f2");
  // root.style.setProperty("--clr-dark", "#1c1d1f");
  // root.style.setProperty("--clr-purple", "#a435f0");
  // root.style.setProperty("--clr-pink", "#e91e63");
  // root.style.setProperty("--clr-alice-blue", "#f8f9fb");
  // root.style.setProperty("--spacing", "0.1rem");
  // root.style.setProperty("--transition", "all 300ms linear");
};

// Call the function to set CSS variables before rendering the app
setRootCSSVariables();

root.render(
  <SidebarProvider>
    <CoursesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CoursesProvider>
  </SidebarProvider>
);
