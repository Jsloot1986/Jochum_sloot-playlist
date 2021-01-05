import React from 'react';

class SongForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "", artist: "", genre: 0, rating: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const value = e.target.value;
        this.setState({ ...this.state, [e.target.name]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addSong(
            this.state.title,
            this.state.artist,
            this.state.genre,
            this.state.rating
        );
    }
    render() {
        return ( 
            <form className="song-form" onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="artist"
                        placeholder="artist"
                        value={this.state.artist}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <select
                        name="genre"
                        id="genre"
                        value={this.state.genre}
                        onChange={this.handleChange}
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
                <label>
                    <select
                        name="rating"
                        id="rating"
                        value={this.state.rating}
                        onChange={this.handleChange}>
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
         );
    }
}
 
export default SongForm;