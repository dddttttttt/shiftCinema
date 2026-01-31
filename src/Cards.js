import { NextButton } from "./Buttons";
import { Link } from "react-router-dom"

const FilmCover = ({film}) => {
    return ( 
        <div className="film-card-image-container">
            <div id="text">
                <p>{film.genres[0]}</p>
                <p>{film.country.name}, {film.releaseDate.substr(film.releaseDate.length - 4)}</p>
            </div>
            <img src={`https://shift-intensive.ru/api/${film.img}`} />
        </div>
     );
}

const FilmInformation = ({inList, film}) => {
    const rating = parseFloat(film.userRatings.kinopoisk)
    const starsRating = []
    for (let i = 1; i <= 5; i++) {
        if (i*2 <= rating)
            starsRating.push(<img src="./Icons/starFilledIcon.svg" key={i}/>);
        else if (i*2-1 <= rating)
            starsRating.push(<img src="./Icons/starHalfIcon.svg" key={i}/>);
        else
            starsRating.push(<img src="./Icons/starEmptyIcon.svg" key={i}/>);
    }

    const linkToName = () => {
        if (inList)
            return <Link to={`/film/${film.id}`}><h1>{film.name} ({film.ageRating})</h1></Link>;
        return <h1>{film.name} ({film.ageRating})</h1>
    }
    return ( 
        <div className="film-card-information-container">
            <div id="text">
                {linkToName()}
                <p>{film.originalName}</p>
            </div>
            <div id="rating">
                <div id="stars">
                    {starsRating}
                </div>
                <p>Kinopoisk {rating}</p>
            </div>
        </div>
    );
}

const FilmCard = ({film}) => {
    return ( 
        <div className="film-card-container">
            <FilmCover film={film} />
            <FilmInformation inList={true} film={film} />
            <NextButton linkTo={`/film/${film.id}`} text="Подробнее"/>
        </div>
     );
}

const FilmCardsList = ({films}) => {
    return ( 
        <div className="film-cards-container">
            {films.map((film) => (
                <FilmCard key={film.id} film={film}/>
            ))}
        </div>
     );
}
 
export { FilmCardsList, FilmCover, FilmInformation };