import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Admin/SideBar";
import { ThemeProvider } from "@emotion/react";
import Theme from "../../Style/MyTheme";

function AdminLayout() {
    return (
        <ThemeProvider theme={Theme}>
            <div className="AdminLayout">
                <header>
                    <SideBar/>
                </header>
                <body>
                    <Outlet/>
                </body>
            </div>
        </ThemeProvider>
    );
};

export default AdminLayout;