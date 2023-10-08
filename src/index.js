import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SidebarProvider } from "./context/sidebar_context";
import { CoursesProvider } from "./context/courses_context";
import { CartProvider } from "./context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Define and apply CSS variables
const setRootCSSVariables = () => {
  // Access the root element to set CSS variables
  const root = document.documentElement;

  // Define your CSS variable values
  root.style.setProperty("--primaryColor", '#03002E');
  root.style.setProperty("--primaryColor1", "white");
  root.style.setProperty("--primaryColor2", "#18c6dd");
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
