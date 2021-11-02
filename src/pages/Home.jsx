import React from "react";
import HomeStyle from './Home.module.css';
import Nav from '../components/Nav.jsx';

function Home(){
    return(
        <>
            <Nav />
            <div className={HomeStyle.container}>
                <center>
                    <h1>People Worth Listening To: </h1>
                    <div className={HomeStyle.card}>
                        <a href='/lincoln'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/1200px-Abraham_Lincoln_O-77_matte_collodion_print.jpg' height='300px' width='250px'></img>
                        </a>
                    </div>
                    <div className={HomeStyle.card}>
                        <a href='/gandhi'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/330px-Mahatma-Gandhi%2C_studio%2C_1931.jpg' height='300px' width='250px'></img>
                        </a>
                    </div>
                    <div className={HomeStyle.card}>
                        <a href='/jobs'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg' height='300px' width='250px'></img>
                        </a>
                    </div>
                    <div className={HomeStyle.card}>
                        <a href='/mandela'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/330px-Nelson_Mandela_1994.jpg' height='300px' width='250px'></img>
                        </a>
                    </div>
                </center>
            </div>
        </>
        )
}

export default Home;