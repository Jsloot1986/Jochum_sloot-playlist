import React from 'react';

class SongArtist extends React.Component {
    render() { 
        const {song} = this.props
        return ( 
            <p className="list-item" value={song.artist}>{ song.artist}</p>
         );
    }
}
 
export default SongArtist;