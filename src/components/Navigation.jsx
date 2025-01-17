import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { Link } from "react-router-dom"
import Button from "./Buttons"
import { useRef, useState, useEffect } from "react";

export default function Navigation(){
  return(
    <div className="navigation">
      <nav className="flex gap-x-8">
        <div>
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div>
          <Link to="/about" className="nav-link">About me</Link>
        </div>
        <div>
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </div>
        <div>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export function HamburgerMenu(){
  const [isShow, setIsShow] = useState(false);

  const container = useRef(null);
  const navRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });

  useEffect(() => {
    return () => {
      gsap.killTweensOf(navRef.current);
    }
  }, []);

  const handleClick = contextSafe(() => {
    const show = !isShow;
    gsap.to(navRef.current, {
      x: show ? 0 : 40,
      opacity: show ? 1 : 0,
      duration: .3 
    })
    setIsShow(show); 
  })

  return(
    <div ref={container} className="flex flex-row-reverse gap-x-4">
      <Button
        style={"hamburger"}
        handleClick={handleClick}
        aria-expanded={isShow}
        aria-controls="navigation"
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </Button>
      <div 
        ref={navRef}
        className="translate-x-10 opacity-0"
      >
        <Navigation />
      </div>
    </div>
  )
}