
    const MOUNTAINS = [{
        name: "Kilimanjaro",
        height: 5895,
        place: "Tanzania"
    },
    {
        name: "Everest",
        height: 8848,
        place: "Nepal"
    },
    {
        name: "Mount Fuji",
        height: 3776,
        place: "Japan"
    },
    {
        name: "Vaalserberg",
        height: 323,
        place: "Netherlands"
    },
    {
        name: "Denali",
        height: 6168,
        place: "United States"
    },
    {
        name: "Popocatepetl",
        height: 5465,
        place: "Mexico"
    },
    {
        name: "Mont Blanc",
        height: 4808,
        place: "Italy/France"
    }
];

// Your code here
let Div = document.getElementById("mountains");
let table = document.createElement("table");
table.setAttribute("id", "table");
Div.appendChild(table);
let head_row = document.createElement("tr");
head_row.innerHTML = "<th>Name</th> <th>Height</th> <th>Place</th> "
table.appendChild(head_row);
MOUNTAINS.forEach((mount) => {
    let row = document.createElement("tr");
    let td_name = document.createElement('td');
    let td_height = document.createElement('td');
    let td_place = document.createElement('td');
    td_name.textContent = `${mount.name}`;
    td_height.textContent = `${mount.height}`;
    td_place.textContent = `${mount.place}`;
    row.appendChild(td_name);
    row.appendChild(td_height);
    row.appendChild(td_place);
    table.appendChild(row);
})
