
function getCell (cell, type='td') {
        return `<${type}>${cell}</${type}>`
}
function getCells(cells, type='td') {
        return cells.map(cell => getCell(cell, type)).join('');
}

function getRow(row) {
        return `<tr> ${getCell(row[0], 'th')} ${getCells(row.slice(1))} </tr>`
} 
