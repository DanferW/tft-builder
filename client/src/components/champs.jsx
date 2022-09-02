import React, {useEffect, useState} from "react";
import {getData} from "../api";
import '../App.css';


export function Champs() {
    const [data, setData] = useState([])
    useEffect( () =>{
        async function loadData() {
            const response = await getData();
            setData(response.data);
        }
        loadData();
    }, []);

    function handleDragStart(ev) {
        let data = ev.target.src;
        console.log(data); 
        ev.dataTransfer.setData("text", data)
    }

    
    return(
        
        <div id='champ-box'>
        <div class="grid-box" >
            {
                data.map(data =>(
                    <div class="champ" >
                        
                        <div>
                            <img class="circle-img" 
                            src={require(`./champs/${data.icon}`)} 
                            alt={data.name}
                            onDragStart={handleDragStart}
                            key={data.id}
                            icon={data.icon}/>
                        </div>
                        <p class="champ-name">{data.name}</p>
                    </div>
                ))
            }
        </div>
        </div>
        
    );
}

