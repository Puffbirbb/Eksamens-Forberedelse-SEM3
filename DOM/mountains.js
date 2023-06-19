const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"},
];

function createTable() {
    let table = document.getElementById("table");
    for (mount of MOUNTAINS) {
        let row = document.createElement("tr");
        let nameData = document.createElement("td");
        let heightData = document.createElement("td");
        let placeData = document.createElement("td");
        console.log(mount.place);
        nameData.textContent = mount.name;
        heightData.textContent = mount.height;
        placeData.textContent = mount.place;
        row.appendChild(nameData);
        row.appendChild(heightData);
        row.appendChild(placeData);
        table.appendChild(row);
    }
}

createTable();