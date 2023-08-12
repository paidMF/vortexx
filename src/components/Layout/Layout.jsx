import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header/>

        {/* // Outlet makes sure that other components in between the layout route in the app.jsx file are rendered in between the layout components (header and footer) */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
