// This is the green main contents page
import '../flexbox.css';

// I use useState to automatically update the 'cards' from the internet source.
import {useState} from 'react';

// This is the component to draw all the table rows (cards) in the table <tbody>.
// From the props we know weather to display cards or a table
function ParcelRows(props) 
{

    // This sometimes craches for no obvious reason.
    // If it craches, it sometimes helps to comment out parts of this
    // or the <ParcelRows> element below and refresh the page before un-commenting it again.
    // Do you know why this happens?

    let outPut = props.objects.map(p => 
        <tr key={p.id}>
            <td key={p.id + "ID"}><strong>{p.id}</strong></td>
            <td key={p.id + "status"}>{p.status}</td>
            <td key={p.id + "eta"}>{p.eta}</td>
            <td key={p.id + "pid"}>{p.parcel_id}</td>
            <td key={p.id + "sender"}>{p.sender}</td>
            {/* Highlight parcels needing verification */}
            <td key={p.id + "vr"}  className={(p.verification_required)?"alert":""}>{(p.verification_required)?"Yes":"No"}</td>
            <td key={p.id + "lid"}>{p.location_id}</td>
        </tr>);

    return outPut;
}

// The main contents page (green)
function MainContent(props) {
    // By using the component state the list can be dynamically updated.
    const [list, setList] = useState();

    // Holds the parced objects (parcels)
    var myObj = [];

    // Read the internet source from the URL and parce it from JSON to objects
    const xmlhttp = new XMLHttpRequest();

    // This handler function reacts on file state changes
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState === 4 && this.status === 200) {
            // When the file is read the contents are parced into objects
            myObj = JSON.parse(this.responseText);
            // Let the new objects change the state of the component (that updates automatically)
            setList(myObj);
        }
    }

    // Read the file assyncronously
    xmlhttp.open("GET", "https://my.api.mockaroo.com/orders.json?key=e49e6840", true);
    xmlhttp.send();

    // Return the HTML contents - including the 'cards' read from the internet source (ParcelRows)
    var returnHTML = (
    // This is where cards display of table is decided
    <div className={(props.uc)?"MainContent":"TableContent"}>
        <h1>Main Content (Cards)</h1>
        <p>The input JSON file changes content very often. That is why these 'cards' sometimes flickers. </p>
        <p>You can check this by browsing 
            to <a href="https://my.api.mockaroo.com/orders.json?key=e49e6840" rel="noreferrer" target="_blank">the source</a> and 
            update the page (F5) often.</p>
        <table>
            {/* "prodList" is where the list is built from input source */}
            <tbody id="prodList">
                <tr>
                    {/* Header card */}
                    <th>ID</th>
                    <th>Status</th>
                    <th>ETA</th>
                    <th>Parcel ID</th>
                    <th>Sender</th>
                    <th>Verification required</th>
                    <th>Location ID</th>
                </tr>
                {/* The rows of the table (the cards) using the component state */}
                <ParcelRows objects={list}/>
            </tbody>
        </table>
    </div>);

    return (returnHTML);
}

export default MainContent;

// By Ole Victor