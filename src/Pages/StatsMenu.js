import React from 'react';
import Sidebar from "../components/Menu/SideBar";
import DropdownMenu from "../components/Menu/DropDownMenu";
import Stats from '../components/Stats';

const MenuPage = () => {
  return (
    <>
  <DropdownMenu/>
  <Sidebar/>
  <Stats/>
  </>
  );
};

export default MenuPage;