import React from "react";
import Style from './Details.module.css';
import Nav from '../components/Nav.jsx';

function Details(){
    return(
        <>
            <Nav />
            <div className={Style.container}>
                <center>
                    <h1>Steve Jobs</h1>
                    <img className={Style.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg' height='300px' width='250px'></img>
                    <p>Steven Paul Jobs (/dʒɒbz/; February 24, 1955 – October 5, 2011) was an American business magnate, industrial designer, investor, and media proprietor. He was the chairman, chief executive officer (CEO), and co-founder of Apple Inc.; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak.</p>
                    <p>Jobs and Wozniak co-founded Apple in 1976 to sell Wozniak's Apple I personal computer. Together the duo gained fame and wealth a year later with the Apple II, one of the first highly successful mass-produced microcomputers. Jobs saw the commercial potential of the Xerox Alto in 1979, which was mouse-driven and had a graphical user interface (GUI). This led to the development of the unsuccessful Apple Lisa in 1983, followed by the breakthrough Macintosh in 1984, the first mass-produced computer with a GUI. The Macintosh introduced the desktop publishing industry in 1985 with the addition of the Apple LaserWriter, the first laser printer to feature vector graphics. Jobs was forced out of Apple in 1985 after a long power struggle with the company's board and its then-CEO John Sculley. That same year, Jobs took a few of Apple members with him to found NeXT, a computer platform development company that specialized in computers for higher-education and business markets.</p>
                </center>
            </div>
        </>
        )
}

export default Details;