import { Link } from "react-router-dom"

export default function Navigation(){
  return(
    <div className="navigation">
      <nav className="flex gap-x-8">
        <div>
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div>
          <Link to="/" className="nav-link">About me</Link>
        </div>
        <div>
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </div>
        <div>
          <Link to="/" className="nav-link">Contact</Link>
        </div>
      </nav>
    </div>
  )
}