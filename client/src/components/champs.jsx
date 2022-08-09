import React, {useEffect, useState} from "react";


function Champs() {
    useEffect( () =>{
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch("/");
        const items = await data.json();
        setItems(items);
    };
    return(
        <div>
            {
                items.map(items =>(
                    <div>
                        <p>{items.name}</p>
                        <p>{items.synergy}</p>
                        <p>{items.cost}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Champs;