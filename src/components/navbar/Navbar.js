import React from "react";
import {Nav, NavLink, Bars, NavMenu} from "./NavbarElements"

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1> UAA</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/weather-page" activeStyle>
            Weather
          </NavLink>
          <NavLink to="/planes" activeStyle>
            Planes
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
export default Navbar;

//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//           UAA
//           <i className="fab fa-firstdraft" />
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//           <i className={click ? "fas fa-times" : "fas fa-bars"} />
//         </div>
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/products"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               Products
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/weather-page"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               Weather
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/sign-up"
//               className="nav-links-mobile"
//               onClick={closeMobileMenu}
//             >
//               Sign Up
//             </Link>
//           </li>
//         </ul>
//         <Button />
//       </nav>
//     </>
//   );
// }
