import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
state = {
  trackTitle: ''
}

onChange(e) {
    this.setState({ [e.target.name]: e.target.value }); //make sure trackTitle (which is a set key) matches your name on line 30
}

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"> Search for a Song</i>
              </h1>
              <p className="lead text-center">Get the Lyrics for any Song</p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange.bind(this)}
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    )
  }
}

export default Search;
