const submit = document.querySelector('.submit');


                //        event : Object
submit.onclick = function (event){
    event.preventDefault();
    const fname = document.querySelector('#firstname').value;
    const table = document.querySelector('table');
    const tableRow = document.createElement('tr');
    const tableColumn = document.createElement('td');

    console.log(fname);
    tableColumn.append(fname);
    tableRow.appendChild(tableColumn);
    table.appendChild(tableRow);
    console.log(table);
    document.querySelector('#firstname').value = '';
}


//property event  method