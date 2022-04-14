import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { useContext } from "preact/hooks";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const SlideBar = () => {

  
  return (
      <div
      style={{ display: 'flex', height: '100%', position:"fixed", overflow: 'scroll initial', }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Owner DashBoard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            
            
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            
            
              <CDBSidebarMenuItem icon="user">Log Out</CDBSidebarMenuItem>
            

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
              LOG OUT
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  
  );
};

export default SlideBar;
