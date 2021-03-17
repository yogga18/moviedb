import React, {useState, useEffect} from 'react';

import config_axios from './config_axios';

import './pages.css'




const base_img = 'https://image.tmdb.org/t/p/w300/'

const Movie = (props) => {
    const [movies, setMovies] = useState([]);

    

    
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
                    movies.map((data) => {
                        return(
                            <div className="card">
                                <div>
                                    <img src={`${base_img}${data.poster_path}`}
                                        className="card__image"
                                        alt={data.original_title}
                                        key={data.id} /> 
                                </div>

                                <div className="card__content">         
                                    <h1 className="card__title">{data.title}{data.original_name}</h1>
                                    <hr/>
                                    <h2>Overview</h2>
                                    <div className="card__desc">{data.overview}</div>
                                    <h4 className="card__date">Release Date : {data.release_date}</h4>
                                    <h4 className="card__rating">Rating {data.vote_average}</h4>
                                </div>
                                    

                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Movie;