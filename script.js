<<<<<<< HEAD

function getCell (cell, type='td') {
        return `<${type}>${cell}</${type}>`
}
function getCells(cells, type='td') {
        return cells.map(cell => getCell(cell, type)).join('');
}

function getRow(row) {
        return `<tr> ${getCell(row[0], 'th')} ${getCells(row.slice(1))} </tr>`
} 
=======

function getCell (cell, type='td') {
        return `<${type}>${cell}</${type}>`
}
function getCells(cells, type='td') {
        return cells.map(cell => getCell(cell, type)).join('');
}

function getRow(row) {
        return `<tr> ${getCell(row[0], 'th')} ${getCells(row.slice(1))} </tr>`
} 
>>>>>>> 51a61b4af502c8f6ec8acac1917e37e617445e2b
