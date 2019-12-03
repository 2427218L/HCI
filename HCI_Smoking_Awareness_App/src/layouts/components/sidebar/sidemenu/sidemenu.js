// import external modules
import React, { Component } from "react";

import {
   Home,
   Mail,
   MessageSquare,
   ChevronRight,
   Aperture,
   Box,
   Edit,
   Grid,
   Layers,
   Sliders,
   Map,
   BarChart2,
   Calendar,
   Copy,
   Book,
   CheckSquare,
   LifeBuoy,
   Users
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>

            <SideMenu.MenuMultiItems
               name="Charts"
               Icon={<BarChart2 size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
                <NavLink to="/charts/echartjs" className="item" activeclassname="active">
                  <span className="menu-item-text">Smoking Information</span>
                </NavLink>
                <NavLink to="/charts/userchartjs" className="item" activeclassname="active">
                  <span className="menu-item-text">My Charts</span>
                </NavLink>
            </SideMenu.MenuMultiItems>
         </SideMenu>
      );
   }
}

export default SideMenuContent;
