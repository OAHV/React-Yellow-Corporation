import Yellow from '../pics/dhl.png';

function MainMenu() {
    return (
        <div className="MainMenu">
            <h1>Main Menu</h1>
            <p>(This is a fake menu...)</p>
            <ol>
                <li>order status</li>
                <li>ETAs</li>
                <li>pickup locations</li>
                <li>Delivery locations</li>
                <li>Anomalies</li>
            </ol>
            <img src={Yellow} alt="Yellow" width="170px"></img>
        </div>
    );
}

export default MainMenu;

// By Ole Victor