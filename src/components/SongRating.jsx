import React from 'react';

class SongRating extends React.Component {
    render() { 
        const {song} = this.props
        return ( 
            <p className="list-item" value={song.rating}>{ song.rating}</p>
         );
    }
}
 
export default SongRating;