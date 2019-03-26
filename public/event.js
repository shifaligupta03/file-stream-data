// let host = 'http://127.0.0.1:3000/data';
let source = new EventSource('/data');

source.onmessage = function (e) {
    appendCustomerData(e);
};
source.onerror = function (e) {
    source.close();
};

let appendCustomerData = (e) => {
    let table = document.getElementById("customer-table");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = JSON.parse(e.data).id;
    cell2.innerHTML = JSON.parse(e.data).name;
    cell3.innerHTML = JSON.parse(e.data).address;
    cell4.innerHTML = JSON.parse(e.data).phone_number;
    cell5.innerHTML = JSON.parse(e.data).age;
    cell6.innerHTML = JSON.parse(e.data).type;
}