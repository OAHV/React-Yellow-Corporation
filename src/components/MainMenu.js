// The DHL picture
import Yellow from '../pics/dhl.png';

function MainMenu(props) {
    // The props provide a call-back function to alternate between cards and table display
    return (
        <div className="MainMenu">
            <h1>Main Menu</h1>
            <p>(This is partly a fake menu...)</p>
            <ol>
                {/* Report user input by call-back */}
                <li><a onClick={() => props.uc(true)} href="#">Display as cards</a></li>
                <li><a onClick={() => props.uc(false)} href="#">Display as table</a></li>
                <li>Verification requested</li>
                <li>Delivery locations</li>
                <li>Senders</li>
            </ol>
            {/* The DHL picture */}
            <img src={Yellow} alt="Yellow" width="170px"></img>
        </div>
    );
}

export default MainMenu;

// By Ole Victor