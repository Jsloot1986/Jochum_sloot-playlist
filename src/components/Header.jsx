import React from 'react'
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <div className="headerNav">
                <h1>Your Happy Mood Playlist</h1>
                <ul className="navBar">
                    <Link to="/">
                        <li className="home">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="about">About</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Header
