
let dataZJ = [
    ['nummer',  'coria ', 'pdf' , 'web' , 'mp3' , 'titel' ],
    ['ZJ 306',  ' ', ' ' , '<a href=https://www.youtube.com/watch?v=PlJZtPhT15A> <img src="src/world-wide-web.png" width="20" height="20"> </a>', '' , 'Een mens te zijn op aarde'       ],
    ['ZJ 331',  ' ', ' ' , '<a href=https://www.youtube.com/watch?v=Kkz_14GR_D8> <img src="src/world-wide-web.png" width="20" height="20"> </a>', '' , 'Jezus diep in de woestijn'       ],
    ['ZJ 412',  ' ', ' ' , '<a href=https://www.youtube.com/watch?v=Uvhc6AMWaTE> <img src="src/world-wide-web.png" width="20" height="20"> </a>', '' , 'Al heeft hij ons verlaten'       ],
    ['ZJ 936',  ' ', ' ' , '<a https://www.youtube.com/watch?v=v_ryzBavlQA>      <img src="src/world-wide-web.png" width="20" height="20"> </a>', '' , 'Wie Gods rechte wegen gaat'      ]
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

document.body.insertAdjacentHTML('beforeend', createTable(dataZJ));
