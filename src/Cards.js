import { NextButton } from "./Buttons";

const FilmCard = (film) => {
    film = film.film

    const rating = parseFloat(film.userRatings.kinopoisk)
    const starsRating = []
    for (let i = 1; i <= 5; i++) {
        if (i*2 <= rating)
            starsRating.push(<img src="./Icons/starFilledIcon.svg" />);
        else if (i*2-1 <= rating)
            starsRating.push(<img src="./Icons/starHalfIcon.svg" />);
        else
            starsRating.push(<img src="./Icons/starEmptyIcon.svg" />);
    }

    return ( 
        <div className="film-card-container">
            <div className="film-card-image-container">
                <div id="text">
                    <p>{film.genres[0]}</p>
                    <p>{film.country.name}, {film.releaseDate.substr(film.releaseDate.length - 4)}</p>
                </div>
                <img src={`https://shift-intensive.ru/api/${film.img}`} />
            </div>
            <div className="film-card-information-container">
                <div id="text">
                    <h1>{film.name} ({film.ageRating})</h1>
                    <p>{film.originalName}</p>
                </div>
                <div id="rating">
                    <div id="stars">
                        {starsRating}
                    </div>
                    <p>Kinopoisk {rating}</p>
                </div>
            </div>
            <NextButton text="Подробнее"/>

        </div>
     );
}

const FilmCardsList = (films) => {
    films = films.films
    return ( 
        <div className="film-cards-container">
            {films.map((film) => (
                <FilmCard film={film} />
            ))}
        </div>
     );
}
 
export { FilmCard, FilmCardsList };