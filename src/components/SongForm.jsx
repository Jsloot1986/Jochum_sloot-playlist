import React, {useContext, useState }from 'react';
import { SongContext } from '../context/useContext';

function SongForm() {
    const [songs, setSongs] = useContext(SongContext);
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    //handle input
    const handleTitleInput = (event) => setTitle(event.target.value);
    const handleArtistInput = (event) => setArtist(event.target.value);
    const handleGenreInput = (event) => setGenre(event.target.value);
    const handleRatingInput = (event) => setRating(event.target.value);

    const emptyStates = () => {
        setTitle('')
        setArtist('')
        setGenre('')
        setRating('')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title, artist, genre, rating)
        setSongs([...songs, {
            title: title,
            artist: artist,
            genre: genre,
            rating: rating,
            id: Math.random() * 1000
        }])
        emptyStates()
    }
        
    
    return ( 
        <div className="form-container">
            <form className="song-form" onSubmit={handleSubmit}>
                <label>Title name:
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={handleTitleInput}
                    />
                </label>
                <label>Artist name:
                    <input
                        type="text"
                        name="artist"
                        placeholder="artist"
                        value={artist}
                        onChange={handleArtistInput}
                    />
                </label>
                <label>Genre:
                    <select
                        name="genre"
                        id="genre"
                        value={genre}
                        onChange={handleGenreInput}
                    >
                        <option value="select">Select your genre</option>
                        <option value="Pop">Pop</option>
                        <option value="RnB">RnB</option>
                        <option value="HipHop">HipHop</option>
                        <option value="Classic">Classic</option>
                        <option value="Christmas">Christmas</option>
                        <option value="Dutch">Dutch</option>
                    </select>
                </label>
                <label>Rating:
                    <select
                        name="rating"
                        id="rating"
                        value={rating}
                        onChange={handleRatingInput}>
                        <option value="number">Give your song a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <input className="submit" type="submit" value="add song" />
            </form> 
        </div>
         );
    }
 
export default SongForm;