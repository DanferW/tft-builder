import '../App.css';
import Champs from "./champs";
import NavChamp from "./NavChamp";


function BottomBox() {
    return (
/*provisional*/ <div style={{
            display: 'flex', 
            justifyContent: 'center',
            }}>
        <div style={{
            width: '70%',
            display: 'flex', 
            border: 'solid 1px #382f66',
            borderRadius: '5px',
            backgroundColor: '#2b234f',
            flexDirection: 'column',
            alignItems: 'center',
            scrollbarWidth: 'thin',
            scrollbarColor: '#66689f transparent',
            }}>
            <NavChamp />
            <Champs />
        </div>
        </div>
    );
    
}

export default BottomBox;