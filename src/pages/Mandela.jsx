import React from "react";
import Style from './Details.module.css';
import Nav from '../components/Nav.jsx';

function Details(){
    return(
        <>
            <Nav />
            <div className={Style.container}>
                <center>
                    <h1>Nelson Mandela</h1>
                    <img className={Style.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/330px-Nelson_Mandela_1994.jpg' height='300px' width='250px'></img>
                    <p>Nelson Rolihlahla Mandela (born Rolihlahla Mandela /mænˈdɛlə/;[1] Xhosa: [xolíɬaɬa mandɛ̂ːla]; 18 July 1918 – 5 December 2013) was a South African anti-apartheid revolutionary, political leader and philanthropist who served as the first president of South Africa from 1994 to 1999. He was the country's first black head of state and the first elected in a fully representative democratic election. His government focused on dismantling the legacy of apartheid by tackling institutionalised racism and fostering racial reconciliation. Ideologically an African nationalist and socialist, he served as the president of the African National Congress (ANC) party from 1991 to 1997.</p>
                    <p>JA Xhosa speaker, Mandela was born into the Thembu royal family in Mvezo, Union of South Africa. He studied law at the University of Fort Hare and the University of Witwatersrand before working as a lawyer in Johannesburg. There he became involved in anti-colonial and African nationalist politics, joining the ANC in 1943 and co-founding its Youth League in 1944. After the National Party's white-only government established apartheid, a system of racial segregation that privileged whites, Mandela and the ANC committed themselves to its overthrow. He was appointed president of the ANC's Transvaal branch, rising to prominence for his involvement in the 1952 Defiance Campaign and the 1955 Congress of the People.</p>
                </center>
            </div>
        </>
        )
}

export default Details;