import '../App.css';

function NavChamp() {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            paddingTop: '10px',
            paddingLeft: '5%',
            
        }}>
            <div id='search-button'>
                <span>
                    <img src="https://cdn.mobalytics.gg/assets/common/icons/system-icons/24-search.svg" 
                    alt="as" 
                    style={{
                        height: '20px'
                    }}/>
                </span>
                <input type="text" name="searchChamp" id="searchChamp" placeholder='Search by champion' 
                style={{
                    height: '20px',
                    background: 'transparent',
                    color: 'white',
                    border: 'none',
                    marginLeft: '2px'
                }}/>
                
            </div>
        </div>
    );
    
}

export default NavChamp;