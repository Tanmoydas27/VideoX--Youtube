import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { Outlet } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import MobileHeader from "../layouts/MobileHeader";
import Footer from "../layouts/Footer";

const Body = () => {
  return (
    <div className="w-full lg:overflow-x-hidden">
      <div className="block lg:hidden "><MobileHeader /></div>
      <div className="hidden lg:block"><Header /></div>
      <div className="flex w-full h-full justify-center lg:overflow-x-hidden"> 
        <div className="hidden  lg:flex">
          <Sidebar />
        </div>
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
        <Outlet />
      </div>
      <div><Footer/></div>
    </div>
  )
}

export default Body