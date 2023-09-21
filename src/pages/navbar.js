import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about'>About</NavLink>
    
        </nav>
    )
}
export default Navbar;