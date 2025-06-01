 import { Link } from "react-router-dom";

//  const Header = () => {
  
//   return (
//     <header >
//  <Link to="/">       <figure className="logo">
//   <img src="../src/assets/newLogo-t.png" alt="7Express Sdn Bhd Logo" width="150px"  height="auto"   />  </figure></Link>
//   <nav>
//    <ul>
//      <li><Link to="/about">about</Link></li>
//      <li><Link to="/sevices">services</Link></li>
//      <li><Link to="/why">why us?</Link></li>
//      <li><Link to="/contact" className="track">contact</Link></li>
//    </ul>
//   </nav>

//     </header>
//   )
// }
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
      if (window.innerWidth >= 700) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
   function closeMenu() { //closing the menu
     setIsOpen(false); 
   }
  return (
    <header className="header">
      <Link to="/">
        <figure className="logo">
          <img src="../src/assets/newLogo-t.png" alt="7Express Logo" width="150px" />
        </figure>
      </Link>

      {isMobile && (
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={34} color="black" />
      )}
      
      {(isOpen || !isMobile) && (
        <nav>
          <ul className="nav-links">
            <li onClick={closeMenu}><Link to="/about">About</Link></li>
            <li onClick={closeMenu}><Link to="/Services">Services</Link></li>
            <li onClick={closeMenu}><Link to="/why">Why us?</Link></li>
            <li onClick={closeMenu}><Link to="/contact" className="track">Contact</Link></li>
          </ul>
        </nav>
      ) }
    
    </header>
  );
};
 export default Header;