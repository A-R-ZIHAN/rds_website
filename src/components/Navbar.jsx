import { NavLink } from "react-router-dom";

const Navbar = ()=>{

  return(
    <header>
      <nav className="nav">
        <img src="assets/images/logo-white.png" alt="" />
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
          <li><NavLink to={'/panel'}>Panel</NavLink></li>
          <li><NavLink to={'/events'}>Events</NavLink></li>
        </ul>
      </nav>
    </header>
  )
  
}

export default Navbar