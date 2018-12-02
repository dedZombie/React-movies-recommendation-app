import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';

const apiKey = '97a1e2899ef7d9f4d720ed98d1bf26bb';
const baseURL = 'https://api.themoviedb.org/3/movie'
const imageURL = 'https://image.tmdb.org/t/p/'
// const configuration = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;
// const id = Math.random() * 100;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }
  

  componentDidMount() {
    fetch(`${baseURL}/popular?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: data.results });
    }).catch(err => {
      // Error
      console.error(err);
    });

    // fetch(configuration)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   const baseURL = data.images.base_url;
    //   const posterSize = data.images.poster_sizes[4];
    //   const imageURL = baseURL + posterSize + this.posterPath;
    //   console.log('Acquired imageURL: ' + imageURL);
    // }).catch(err => {
    //   console.error(err);
    // });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container pt-5">
          <div className="row">
            <div className="col">
              <div className="card-columns">
                {this.state.movies.map(movie => <MovieCard {...movie} /> )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MovieCard = ({ title, overview, poster_path, release_date, id }) => (
  <div className="card" key={id}>
    <img src={imageURL+'w500'+ poster_path} alt="Movie poster" className="card-img-top"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{overview}</p>
      <p className="card-footer">
        <small className="text-muted">{release_date}</small>
      </p>
    </div>
  </div>
);

export default App;
