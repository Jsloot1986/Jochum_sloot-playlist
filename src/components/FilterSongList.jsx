import React from 'react';
import Button from './Button';

function FilterSongList(props) {
    const filterGenre = ["Pop", "RnB", "HipHop", "Classic", "Christmas", "Dutch", "All"];

    const handleFilterButton = event => {
        props.resetSongsToFilter();
        const getValue = event.target.innerHTML;
        props.setStatus(getValue)
    }

    return (
        <div className="genreButtons">
            {filterGenre.map((song, index) => 
                <Button
                    name={song}
                    handleFilterButton={handleFilterButton}
                    key={index}
                />)}
        </div>
    )
}
export default FilterSongList