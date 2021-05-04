import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import config_axios from './config_axios';
import './pages.css';




const base_img = 'https://image.tmdb.org/t/p/w300/';

const Movie = (props) => {
    const [movies, setMovies] = useState([]);
    const history = useHistory();
    

    
    useEffect(() => {
        const fetchMovies = async () => {
            const request = await config_axios.get(props.url)
            setMovies(request.data.results)


        }

        fetchMovies();
    }, [])

    return (
        <div className="row">
                {
                    movies.map((movies) => {
                        return(
                            <div className="card">
                                <div>
                                    <img src={`${base_img}${movies.poster_path}`}
                                        className="card__image"
                                        alt={movies.original_title}
                                        key={movies.id} /> 
                                </div>

                                <div className="card__content">         
                                    <h1 className="card__title">{movies.title}{movies.original_name}</h1>
                                    <hr/>
                                    <h2>Overview</h2>
                                    <div className="card__desc">{movies.overview}</div>
                                    <h4 className="card__date">Release Date : {movies.release_date}</h4>
                                    <h4 className="card__rating">Rating {movies.vote_average}</h4>
                                    <hr/>
                                    
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    movies={movies}
                                    onClick={() => history.push(`/DetailMovies/${movies.id}`)}>Detail</Button>
                                </div>

                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Movie;