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
        <div class="grid-box" >
            {
                data.map(data =>(
                    <div class="champ">
                        <div>
                            <img class="circle-img" 
                            src={require(`./champs/${data.icon}`)} 
                            alt={data.name}/>
                        </div>
                        <p class="champ-name">{data.name}</p>
                    </div>
                ))
            }
        </div>
        </div>
        
    );
}

export default Champs;