import React from 'react';
import SongForm from './SongForm'
import SongList from './SongList'
import Header from './Header'


class SongOverview extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = 
    {
      songs: [],
      oldSongs: [],
      loading: false,
       
    }
     this.addSong = this.addSong.bind(this);
    }
    
  addSong = (title, artist, genre, rating) => {
    const songToAdd = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      artist: artist,
      genre: genre,
      rating: rating,
    };
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.songs = [...newState.songs, songToAdd];
      return newState;
    });
  }

  render() {
    return (
      <div className="song-overview">
              <Header />
              <SongForm addSong={this.addSong}/>
                                        
              <SongList songs={this.state.songs}/>
      </div>
    );
  }
}

export default SongOverview;