import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FiHome,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { GiFoodTruck } from "react-icons/gi";
import {BsPersonCircle,BsCalendar2CheckFill,BsInstagram} from "react-icons/bs";
import {AiOutlineFacebook,AiOutlineContainer} from "react-icons/ai"
import {BiMap} from "react-icons/bi"
import "react-pro-sidebar/dist/css/styles.css";
import "./SideNavigationBar.css";
import CartLocator from "../CartLocator/CartLocator";




const SideNavigationBar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "  " : <img src="/images/RissaLogo.png" alt="Rissa Logo" className="logo-image"></img>}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>Home</MenuItem>
                <MenuItem  icon={<BsPersonCircle />} >About</MenuItem>
                <MenuItem icon={<BsCalendar2CheckFill/>}><Link to= "/events"/>Upcoming Events</MenuItem>
                <MenuItem icon={<GiFoodTruck />}>Home Goods</MenuItem>
                <MenuItem icon={<AiOutlineContainer />}>Contact</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            Current Location:
            <CartLocator className="footer-map"/>

          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideNavigationBar;
