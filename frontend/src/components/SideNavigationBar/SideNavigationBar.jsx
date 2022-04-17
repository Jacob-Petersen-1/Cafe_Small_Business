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
import {BsPersonCircle,BsCalendar2CheckFill} from "react-icons/bs";
import {AiOutlineContainer} from "react-icons/ai"
import "react-pro-sidebar/dist/css/styles.css";
import "./SideNavigationBar.css";
import CartLocator from "../CartLocator/CartLocator";
import {Modal, Button} from 'react-bootstrap';
import "bootswatch/dist/sandstone/bootstrap.min.css";





const SideNavigationBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <MenuItem icon={<AiOutlineContainer />} onClick={handleShow}>Contact</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            Current Location:
            <CartLocator className="footer-map"/>
          </SidebarFooter>
        </ProSidebar>
        <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
              <Modal.Title>CONTACT US!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div class="form-group">
              <form>
                  <label class="form-label mt-4">Contact Info: </label>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingPhone" placeholder="Last Name"/>
                      <label for="floatingPhone">Phone Number</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingFirst" placeholder="First Name"/>
                      <label for="floatingFirst">First Name</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingSecond" placeholder="Last Name"/>
                      <label for="floatingSecond">Last Name</label>
                    </div>

                    <div class="form-group">
                      <label for="exampleTextarea" class="form-label mt-4">Message</label>
                      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                  </form>
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary">
                Submit 
              </Button>
            </Modal.Footer>
      </Modal>

        </div>
      </div>
    </>
  );
};

export default SideNavigationBar;
