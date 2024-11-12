
const creatTable =((rows,cols) => {
    const table = document.getElementById('myTable')
    for (let i=0 ; i< rows ; i++)
    {
        const row = document.createElement('tr');
        for (j=0; j<cols; j++) {
        const cell = document.createElement('td')
         row.appendChild(cell);
        }
       table.appendChild(row)
    }
})

console.log(creatTable(6,5))