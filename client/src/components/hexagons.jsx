import '../App.css';

function Hexagon() {
    return (
        <div id='hex-box'>
        <div class="hex">
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
        </div>
        <div class="hex" id="pair">
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
        </div>
        <div class="hex">
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
        </div>
        <div class="hex" id="pair">
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
            <div class="hexagon" draggable="true"> </div>
        </div>
        </div>
    );
    
}

export default Hexagon;