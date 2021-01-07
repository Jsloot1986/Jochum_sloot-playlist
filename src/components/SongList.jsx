import React from 'react';
import Song from './Song';


function SongList(props) {
    
    return ( 
        <div className="container">
            <h1 className="songlistTitle">Your added songs:</h1>
            <div className="songlistBox">
                <div className="Title_songlistbox songlistItem">
                    <p>Title:</p>
                    <p>Artist:</p>
                    <p>Genre</p>
                    <p>#</p>
                    <p className="no-background">Remove</p>
                </div>
        {
        props.filterSong.map(song => (
            <Song
                key={song.id}
                title={song.title}
                artist={song.artist}
                genre={song.genre}
                rating={song.rating}
                song={song}
            />
        ))
        }
            </div>
    </div>
      
   )
}
 
export default SongList;