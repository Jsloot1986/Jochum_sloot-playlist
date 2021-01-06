import React, { useContext } from 'react';
import { SongContext } from '../context/useContext';

function Song(props) {
    const [songs, setSongs] = useContext(SongContext);

    const handleDelete = () => {
        setSongs(songs.filter(song => song.id !== props.song.id))
    };

    return ( 
        <div className="item_songlist songlistItem">
            <p>{props.title}</p>
            <p>{props.artist}</p>
            <p>{props.genre}</p>
            <p>{props.rating}</p>
            <button onClick={handleDelete}><i className="far fa-trash-alt"></i></button>
            </div>
         );
};

 
export default Song;