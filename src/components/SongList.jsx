import React from 'react';
import SongTitle from './SongTitle';
import SongArtist from './SongArtist';
import SongGenre from './SongGenre';
import SongRating from './SongRating'

class SongList extends React.Component {
   render() { 
       const { songs } = this.props;
       const title = songs ? songs.map((song) => (
           <SongTitle
               key={song.id}
               song={song}
           />
       ))
           : "";
       const artist = songs ? songs.map((song) => (
           <SongArtist
               key={song.id}
               song={song}
           />
       ))
           : "";
       const genre = songs ? songs.map((song) => (
           <SongGenre
               key={song.id}
               song={song}
           />
       ))
           : "";
       const rating = songs ? songs.map((song) => (
           <SongRating
               key={song.id}
               song={song}
           />
       ))
           : "";
       
    return (
        <div className="table-responsive{-sm|-md|-lg|-xl}">
            <table className="table">
                <thead>
                    <tr className="bg-success">
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tfoot>
                     <tr className="bg-info">
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>
                </tfoot>
                <tbody>
                     <tr className="bg-warning">
                        <th>{ title }</th>
                        <th>{ artist }</th>
                        <th>{ genre }</th>
                        <th> { rating }</th>
                    </tr>
                </tbody>
            </table>
        </div>
            
         );
    }
}
 
export default SongList;