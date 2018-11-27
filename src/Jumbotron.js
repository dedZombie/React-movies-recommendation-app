import React, { Component } from 'react'

export class Jumbotron extends Component {
  render() {
    return (
        <div className="jumbotron" style={{'backgroundColor': 'rgba(102, 16, 242, 0.3)'}}>
            <h1 className="display-1 text-white">Welcome to Movies</h1>
            <p className="lead text-white">This is a place where you can bookmark all the movies you want to watch and rate them. Enjoy!</p>
        </div>
    )
  }
}

export default Jumbotron;
