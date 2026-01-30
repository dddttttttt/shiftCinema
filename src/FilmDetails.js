import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FilmCover, FilmInformation } from "./Cards";

const FilmDetails = () => {
    const { filmId } = useParams();
    const [film, setFilm] = useState(null);

    const abortContrl = new AbortController();

    useEffect(() => {
        fetch(`https://shift-intensive.ru/api/cinema/film/${filmId}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setFilm(data.film);
            })
            return () => abortContrl.abort();
    }, [])

    if (!film)
        return null;
    return ( 
        <div className="film-det-container">
            <Link to="/" className="film-det-back"><p>{"< Назад"}</p></Link>
            <div className="film-det-card">
                <FilmCover film={film} />
                <div className="film-det-text">
                    <FilmInformation inList={false} film={film} />
                    <p>{film.description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default FilmDetails;