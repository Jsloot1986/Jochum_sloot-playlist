import React from 'react';


function About() {
    return (
        <div className="aboutContainer">
            <h1 className="aboutTitle">About the maker</h1>
            <div className="about-main">
                <img className="picture" src="https://i.ibb.co/BnH41CT/jochumnew1.jpg" alt="jochumnew1" />
                <div className="aboutTextBox container">
                    <h3>Jochum Sloot</h3>
                    <h2>Welcome to my musicmaker playlist.</h2>
                    <h4>Born</h4>
                    <blockquote>
                    <p className="aboutText">My name is Jochum Sloot. I was born on 5th of October 1986.<br />
                        I was born in the North of The Netherlands, Fryslân, Dokkum.<br />
                        My parents are divorced wen I was 10 years old.<br/>
                        I lived with my mother and two sisters till I was 20 years and moved after that to Amsterdam.<br />
                        I followed a study for Hotel management and after my study I get a job in a hotel at Schiphol.<br />
                        I work till June 2020 in diffrent hotels in Amsterdam and my last function was Restaurant Manager.<br />
                        Because of Covid I lost my job and I diside to follow an education for Full-stack Development at Winc Academy</p>
                    </blockquote>
                    <h4>Web development</h4>
                    <blockquote>
                    <p className="aboutText" >Why did I choose for a eduction to Web developer?<br />
                        Because I lost my job, I had to think what I want to do with my career.<br />
                        I made in a few years ago a website for a friend and I really liked it.<br />
                        After to do a 5 days code challange and follow an information meeting at Winc Academy, <br />
                        I diside to follow the education for Full-stack Development.<br />
                        Because I'm new in this world and I don't know what I like, I choose the Full-stack education.<br />
                        I'm almost finished with the Front-end and I like programming everyday more.
                    </p>
                        </blockquote>
                    <h4>Hobby</h4>
                    <blockquote>
                    <p className="aboutText">In my freetime I play Volleyball at Netzo Amsterdam.<br />
                        Every Friday-evening training and every week a match.<br />
                        I like to go to the gym also.<br />
                        Also I like to visit the cinema once a week sometimes twice.<br />
                        If everything is normal again I like to travel also and discover the nice countries in the world!</p>
                    </blockquote>
                    <h4>Why this website?</h4>
                    <p className="aboutText">This website is my second React website and I like to programm with React.<br />
                        I also like to style websites and like to discover the CSS libaries, like Bootstrap.<br />
                        Have fun with making your own playlist!</p>
                </div>
            </div>
        </div>
    )
}
export default About