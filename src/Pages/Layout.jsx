import React from "react";

import "./Layout.css";

import { Outlet, Link, NavLink } from "react-router-dom";

function Layout() {

    return (
        <>
            <h3>Product Management System</h3>

            <nav>
                <Link to="/home">Home</Link> ||

                <Link to="/product">Product</Link> ||

                <Link to="/service">Service</Link> ||

                <Link to="/blog">Blog</Link> ||

                <Link to="/contactUs">Contacts</Link> ||

               

                <NavLink
                    to="/aboutus"
                    style={({ isActive }) => ({
                        color: isActive ? "blue" : "orange",
                        fontWeight:isActive ? "bold":"normal"
                    })}
                >
                    AboutUs
                </NavLink>
            </nav>

            <br />

            <Outlet />
        </>
    );
}

export default Layout;