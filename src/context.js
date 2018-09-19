import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) { //evaluate action type
    case 'SEARCH_TRACKS':
    return {
      ...state,
      track_list: action.payload,
      heading: 'Search Results'
    };
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top 10 Tracks',
    dispatch: action => this.setState(state => reducer(state, action))

    //allows to have a reducer where we can call this dispatch to any consumer component and do what we want, eg.replace 10 tracks with what we have searched
  };

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=uk&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
      .then(res =>
        //{console.log(res.data)
        this.setState({track_list: res.data.message.body.track_list})
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
