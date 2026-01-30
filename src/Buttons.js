import { Link } from "react-router-dom";

const pageRedirect = () => {
    
}

const NavButton = ({linkTo, imageSrc, text}) => {

    return (
        <Link className="nav-button-container" to={linkTo}>
            <img src={imageSrc}/>
            <h1>{text}</h1>
        </Link>
     );
}

const NextButton = ({linkTo, text}) => {
    return ( 
        <Link to={linkTo} className="next-button">
            <p>{text}</p>
        </Link>
     );
}

const PrevButton = ({linkTo, text}) => {
    return ( 
        <Link to={linkTo} className="prev-button">
            <p>{text}</p>
        </Link>
     );
}
 
export {NavButton, NextButton, PrevButton};