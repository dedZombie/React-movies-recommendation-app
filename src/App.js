import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';

const apiKey = 'https://api.airtable.com/v0/appyKRn8VsOzsHhNK/Favorites?api_key=keyGCmyUxgakOzL0a';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch(apiKey)
    .then(res => res.json())
    .then(data => {
      this.setState({ movies: data.records });
    }).catch(err => {
      // Error
      console.err(err);
    });
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
                {this.state.movies.map(movie => <MovieCard {...movie.fields} /> )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MovieCard = ({ title, year, description, imageURL }) => (
  <div className="card">
    <img src={imageURL[0].url} alt="Movie poseter" className="card-img-top"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p className="card-footer">
        <small className="text-muted">{year}</small>
      </p>
    </div>
  </div>
);

export default App;
