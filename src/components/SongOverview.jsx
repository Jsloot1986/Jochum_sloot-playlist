import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import SongForm from './SongForm';
import SongList from './SongList';
import FilterSongList from './FilterSongList';
import { SongContext } from '../context/useContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function SongOverview() {
  //global state
  const [songs, setSongs] = useContext(SongContext);
  
  //local store
  const saveLocalSongs = () => localStorage.setItem('songs', JSON.stringify(songs))

  const getLocalSongs = () => {
    if (localStorage.getItem('songs') === null) {
      localStorage.setItem('songs', JSON.stringify([]))
    } else {
      let songLocal = JSON.parse(localStorage.getItem('songs'))
      setSongs(songLocal)
    }
  };
    
  //Copy from songs for filter genre
  const [songsToFilter, setSongsToFilter] = useState([]);

  // status from the buttons clicks
  const [status, setStatus] = useState("all");

  const handleFilter = () => {
    switch (status) {
      case 'Pop':
        setSongsToFilter(songsToFilter.filter(todo => todo.genre === 'Pop'))
        break;
      case 'RnB':
        setSongsToFilter(songsToFilter.filter(todo => todo.genre === 'RnB'))
        break;
      case 'HipHop':
        setSongsToFilter(songsToFilter.filter(todo => todo.genre === 'HipHop'))
        break;
      case 'Classic':
        setSongsToFilter(songsToFilter.filter(todo => todo.genre === 'Classic'))
        break;
      case 'Christmas':
        setSongsToFilter(songsToFilter.filter(todo => todo.genre === 'Christmas'))
        break;
      case 'Dutch':
        setSongsToFilter(songsToFilter.filter(todo => todo.genre === 'Dutch'))
        break;
      case 'All':
        setSongsToFilter(songs)
        break;
      default:
        setSongsToFilter(songs)
      
    };
  };

  //UseEffect
  useEffect(() => {
    getLocalSongs()
  }, []);

  useEffect(() => {
    saveLocalSongs()
    setSongsToFilter(songs)
  }, [songs]);

  useEffect(() => {
    handleFilter();
  }, [status]);

  const resetSongsToFilter = () => {
    setSongsToFilter(songs)
  };

  return (
      <Router>
      <div className="song-overview">
        <Header />
        <SongForm />
        <FilterSongList
          setStatus={setStatus}
          resetSongsToFilter={resetSongsToFilter}
        />
        <Switch>
          <Route path="/" exact component=
            {() => <SongList filterSong={ songsToFilter }/>}/>
        </Switch>
      </div>
      </Router>
    );
  }

export default SongOverview;