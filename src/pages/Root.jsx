import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation, { HamburgerMenu } from "../components/Navigation";
import { useEffect, useState } from "react";

export default function Root(){
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 992);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return(
    <div className="page-wrapper">
      <header className={`fixed ${isWideScreen ? "left-1/2 top-3 -translate-x-1/2 z-50" : "top-5 right-4"} z-50`}>
        {isWideScreen ? <Navigation /> : <HamburgerMenu />}
      </header>
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}