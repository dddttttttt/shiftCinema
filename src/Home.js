import { useEffect, useState } from "react";
import {FilmCard, FilmCardsList} from "./Cards";

const Home = () => {
    const [films, setFilms] = useState(null);

    useEffect(() => {
        fetch("https://shift-intensive.ru/api/cinema/films")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setFilms(data.films);
            });
    }, []);

    return ( 
        <div className="home-container">
            <h1>Афиша</h1>
            {films && <FilmCardsList films={ films } />}
        </div>
     );
}
 
export default Home;