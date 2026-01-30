import { NavButton } from "./Buttons"

const NavBar = () => {
    return ( 
        <nav className="nav-container">
            <div className='nav-left'>
                <div className="nav-logo">
                    <img src="/Icons/mainIcon.svg"/>
                    <h1>ABSOLUTE<br />CINEMA</h1>
                </div>
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