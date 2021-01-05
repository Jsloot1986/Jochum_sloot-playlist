import React from 'react';

class SongGenre extends React.Component {
    render() { 
        const {song} = this.props
        return ( 
            <p className="list-item" value={song.genre}>{ song.genre}</p>
         );
    }
}
 
export default SongGenre;