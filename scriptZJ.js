<<<<<<< HEAD

let dataZJ = [
    ['nummer',  'coria ', 'pdf' , 'web' , 'mp3' , 'titel' ],
    ['ZJ 306',  ' ', ' ' , '<a href=https://www.youtube.com/watch?v=PlJZtPhT15A> <img src="./world-wide-web.png" width="20" height="20"> </a>', '' , 'Een mens te zijn op aarde'       ],
    ['ZJ 331',  ' ', ' ' , '<a href=https://www.youtube.com/watch?v=Kkz_14GR_D8> <img src="./world-wide-web.png" width="20" height="20"> </a>', '' , 'Jezus diep in de woestijn'       ]
];
          
function createTable(dataZJ) {
  const [headings, ...rows] = dataZJ;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

=======

let dataZJ = [
    ['nummer',  'coria ', 'pdf' , 'web' , 'mp3' , 'titel' ],
    ['ZJ 306',  ' ', ' ' , '<a href=https://www.youtube.com/watch?v=PlJZtPhT15A> <img src="./world-wide-web.png" width="20" height="20"> </a>', '' , 'Een mens te zijn op aarde'       ],
    ['ZJ 331',  ' ', ' ' , '<a href=https://www.youtube.com/watch?v=Kkz_14GR_D8> <img src="./world-wide-web.png" width="20" height="20"> </a>', '' , 'Jezus diep in de woestijn'       ]
];
          
function createTable(dataZJ) {
  const [headings, ...rows] = dataZJ;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

>>>>>>> 51a61b4af502c8f6ec8acac1917e37e617445e2b
document.body.insertAdjacentHTML('beforeend', createTable(dataZJ));