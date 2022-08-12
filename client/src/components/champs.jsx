import React, {useEffect, useState} from "react";
import {getData} from "../api";
import '../App.css';


function Champs() {
    const [data, setData] = useState([])
    useEffect( () =>{
        async function loadData() {
            const response = await getData();
            setData(response.data);
        }
        loadData();
    }, []);

    
    return(
        <div id='champ-box'>
            {
                data.map(data =>(
                    <div>
                        <p>{data.name}</p>
                        <p>{data.synergy}</p>
                        <p>{data.cost}</p>
                        <div>
                            <img class="circle-img" 
                            src={require(`./champs/${data.icon}`)} 
                            alt={data.name}/>
                        </div>
                        </div>
                ))
            }
        </div>
    );
}

export default Champs;