import React from 'react';

class SongTitle extends React.Component {
    render() { 
        const {song} = this.props
        return ( 
            <p className="list-item" value={song.title}>{ song.title}</p>
         );
    }
}
 
export default SongTitle;