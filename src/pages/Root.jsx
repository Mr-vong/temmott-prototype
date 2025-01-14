import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Root(){
  return(
    <div className="page-wrapper">
      <header className="fixed left-1/2 top-3 -translate-x-1/2 z-50">
        <Navigation />
      </header>
      <Outlet />
    </div>
  )
}