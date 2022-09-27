function MainContent() {
    var myObj = [];
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState === 4 && this.status === 200) {
            myObj = JSON.parse(this.responseText);
            var elem = document.getElementById("prodList");
            elem.innerHTML = "<tr><th>ID</th><th>Status</th><th>ETA</th><th>Parcel ID</th><th>Sender</th><th>Ver Req</th><th>Location ID</th></tr>";
            myObj.forEach(e => {
                elem.innerHTML += "<tr><td>" 
                + e.id + "</td><td>" 
                + e.status + "</td><td>" 
                + e.eta + "</td><td>" 
                + e.parcel_id + "</td><td>" 
                + e.sender + "</td><td>" 
                + e.verification_required + "</td><td>" 
                + e.location_id + "</td></tr>";
            });
        }
    }
    xmlhttp.open("GET", "https://my.api.mockaroo.com/orders.json?key=e49e6840", true);
    xmlhttp.send();

    return (
        <div className="MainContent">
            <h1>Main Content</h1>
            <table>
            <tbody id="prodList">
            
            </tbody>
            </table>
           
            
        </div>
    );
}

export default MainContent;