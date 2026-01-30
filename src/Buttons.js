const pageRedirect = () => {
    
}

const NavButton = (props) => {

    return ( 
        <div onClick={pageRedirect} className="nav-button-container">
            <img src={props.imageSrc}/>
            <h1>{props.text}</h1>
        </div>
     );
}

const NextButton = ({text}) => {
    return ( 
        <div onClick={pageRedirect} className="next-button">
            <p>{text}</p>
        </div>
     );
}

const PrevButton = ({text}) => {
    return ( 
        <div onClick={pageRedirect} className="prev-button">
            <p>{text}</p>
        </div>
     );
}
 
export {NavButton, NextButton, PrevButton};