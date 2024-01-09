import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi"
import { FaBorderAll } from "react-icons/fa";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
function SideBar() {
    const appStyle = {
        background: "black",
        color: "white",
        height: '100vh',
        paddingLeft: '20px',
        // width: "20vw",
      };
  return (
    <div style={appStyle}>
    <Sidebar >
  <Menu     menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        // [`&.active`]: {
          backgroundColor: 'black',
          color: '#b6c8d9',
        // },
      },
    }}>
    <MenuItem>  </MenuItem>
    <div style={{margin:'0px', width:'110'}}>
            <img src={require('./5.png')} height={60} width={248}/>
            </div>
    <MenuItem> <IoHomeOutline /> Home </MenuItem>
    <MenuItem> <HiOutlineClipboardList /> Orders </MenuItem>
    <MenuItem> <FaBorderAll /> Product </MenuItem>
    <MenuItem> Delivery </MenuItem>
    <MenuItem> Marketing </MenuItem>
    <MenuItem> Analytics </MenuItem>

    <MenuItem> Payments </MenuItem>
    <MenuItem> Tools </MenuItem>
    <MenuItem> Discounts </MenuItem>
    <MenuItem> Audience </MenuItem>
  </Menu>
</Sidebar>
</div>
  );
}

export default SideBar;
    