import { NavButton } from "./Buttons"

const NavBar = () => {
    return ( 
        <nav className="navigate-container">
            <div className='nav-left'>
                <NavButton imageSrc="./Icons/profileIcon.svg" text="Профиль" />
                <NavButton imageSrc="./Icons/ticketIcon.svg" text="Билеты" />
            </div>
            <div className="nav-right">
                <NavButton imageSrc="./Icons/exitIcon.svg" text="Выход"/>
            </div>
        </nav>
     );
}
 
export default NavBar;