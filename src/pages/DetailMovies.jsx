import React, { useEffect, useState, Fragment } from 'react';
import './DetailMovies.css';
import axios from 'axios';

const base_img = 'https://image.tmdb.org/t/p/w500/';
const baseUrl = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'ba57158e113b297b193e71fffbecfb62';

function DetailMovies(props) {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      const id = props.match.params.id;
      const request = await axios
        .get(`${baseUrl}${id}?api_key=${apiKey}`)
        .then((result) => {
          setDetail([result.data]);
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchDetail();
  });

  // console.log(props.match.params)
  return (
    <Fragment>
      {detail.map((detail) => {
        return (
          <div className='detai-wrapper'>
            <div className='poster-wrapper'>
              <div className='Wrap-img'>
                <img
                  src={`${base_img}${detail.poster_path}`}
                  className='backdrop_path'
                  alt={detail.original_title}
                  key={detail.id}
                />
              </div>
              <div className='Wrap-desc'>
                <h1 className='title-movies'>{detail.title}</h1>
                <p className='tag-line'>
                  <i>" {detail.tagline} "</i>
                </p>
                <h1>Overview</h1>
                <p>{detail.overview}</p>
                <ul>
                  <li>
                    <p>Release Date : {detail.release_date}</p>
                  </li>
                  <li>
                    <p>Status {detail.status}</p>
                  </li>
                  <li>
                    <p>Budget Production {detail.budget}</p>
                  </li>
                  <li>
                    <p>Popularity {detail.popularity}</p>
                  </li>
                  <li>
                    <p>Rating {detail.vote_average}</p>
                  </li>
                </ul>
                {/* <p>Release Date : {detail.release_date}</p>
                                        <p>Status {detail.status}</p>
                                        <p>Budget Production {detail.budget}</p>
                                        <p>Popularity {detail.popularity}</p>
                                        <p>Rating {detail.vote_average}</p> */}

                <div className='second-img'>
                  <img
                    src={`${base_img}${detail.backdrop_path}`}
                    className='second-poster'
                    alt={detail.original_title}
                    key={detail.id}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default DetailMovies;
