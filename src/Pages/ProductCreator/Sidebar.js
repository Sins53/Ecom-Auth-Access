import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100%", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader
          prefix={
            <h2>
              <i className="fa fa-bars fa-large"></i>
            </h2>
          }
        >
          <h2>Creator</h2>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/creator" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">
                <h3>Dahboard</h3>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">
                <h3>Lobby</h3>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">
                <h3>Actions</h3>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/pageNotFound" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">
                <h3>404 page</h3>
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
          <CDBSidebarMenu></CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
