import { NavButton } from "./Buttons"
import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        <nav className="nav-container">
            <div className='nav-left'>
                <Link to="/" className="nav-logo">
                    <img src="/shiftCinema/Icons/mainIcon.svg"/>
                    <h1>ABSOLUTE<br />CINEMA</h1>
                </Link>
                <NavButton linkTo="/profile" imageSrc="/shiftCinema/Icons/profileIcon.svg" text="Профиль" />
                <NavButton linkTo="/tickets" imageSrc="/shiftCinema/Icons/ticketIcon.svg" text="Билеты" />
            </div>
            <div className="nav-right">
                <NavButton linkTo="/exit" imageSrc="/shiftCinema/Icons/exitIcon.svg" text="Выход"/>
            </div>
        </nav>
     );
}
 
export default NavBar;