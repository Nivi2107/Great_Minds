import React from "react";
import Style from './Details.module.css';
import Nav from '../components/Nav.jsx';

function Details(){
    return(
        <>
            <Nav />
            <div className={Style.container}>
                <center>
                    <h1>Mahatma Gandhi</h1>
                    <img className={Style.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/330px-Mahatma-Gandhi%2C_studio%2C_1931.jpg' height='300px' width='250px'></img>
                    <p>Mohandas Karamchand Gandhi (/ˈɡɑːndi, ˈɡændi/;[2] 2 October 1869 – 30 January 1948) was an Indian lawyer,[3] anti-colonial nationalist[4] and political ethicist[5] who employed nonviolent resistance to lead the successful campaign for India's independence from British rule[6] and in turn to inspire movements for civil rights and freedom across the world. The honorific Mahātmā (Sanskrit: "great-souled", "venerable"), first applied to him in 1914 in South Africa, is now used throughout the world.[7][8]</p>
                    <p>Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in the law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years. It was here that Gandhi raised a family and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India. He set about organising peasants, farmers, and urban labourers to protest against excessive land-tax and discrimination. Assuming leadership of the Indian National Congress in 1921, Gandhi led nationwide campaigns for easing poverty, expanding women's rights, building religious and ethnic amity, ending untouchability, and above all for achieving swaraj or self-rule.[9]</p>
                </center>
            </div>
        </>
        )
}

export default Details;