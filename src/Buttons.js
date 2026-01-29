const NavButton = (props) => {

    const pageRedirect = () => {
        
    }

    return ( 
        <button onClick={pageRedirect} className="nav-button-container">
            <img src={props.imageSrc}/>
            <h1>{props.text}</h1>
        </button>
     );
}
 
export default NavButton;