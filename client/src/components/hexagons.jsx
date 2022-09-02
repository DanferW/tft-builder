import '../App.css';


function Hexagon() {
    let hex = [];
    for (let i = 0; i < 7; i++) {
        hex.push(<img class="hexagon" 
        src={require(`./hexagon.png`)} 
        alt='hexagon' 
        onDragOver={dragOver}
        onDrop={drop}
        style={{
            userSelect: "none",
        }}/>)
    }

    function dragOver(ev) {

        ev.preventDefault();
    
    }
    
    
    function drop(ev) {
        ev.preventDefault();
        console.log(ev.dataTransfer.getData("drag-item"));
    }

    return (
        <div id='hex-box'>
        <div class="hex">
            {hex}
        </div>
        <div class="hex" id="pair">
            {hex}
        </div>
        <div class="hex">
            {hex}
        </div>
        <div class="hex" id="pair">
            {hex}
        </div>
        
        </div>
    );
    
}

export default Hexagon;