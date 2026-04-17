<!-- script20260125.js -->

let data20260125 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                               ],
    ['0808', '1-3',       '<a href=src/missing.html>                           <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Het volk dat wandelt in het duister' ],
    ['1486', 'alles',     '<a href=coria/1486_KomHeerJezus.html>               <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Kom, Heer Jezus'                       ],
    ['0166', 'alles',     '<a href=src/missing.html>                           <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Eert God die onze Vader is'       ],
    ['0897', '1-2-3',     '<a href=src/missing.html>                           <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Jezus die langs het water liep (ZJ 562)' ],
    ['0386', 'alles',     '<a href=coria/0386_DE_ZALIGSPREKENDEN.html>         <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Woorden van eeuwig leven'                    ],
    ['0549', 'alles',     '<a href=coria/0549_LaudateOmnesGentes.html>         <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laudate omnes gentes'       ],
    ['0690', 'alles',     '<a href=coria/0690_VredeVoorIedereen.html>          <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede voor iedereen'                       ],
    ['0350', '1-3',       '<a href=src/missing.html>                           <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Als je geen liefde hebt voor elkaar'                ],
    ['1951', 'alles',     '<a href=coria/1951_Heer_verhoor_ons.html>           <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heer, verhoor ons'                ],
    ['0795', '1-2',       '<a href=coria/0795_GaNaarDeStraten.html>            <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Ga naar de straten en pleinen'              ]
];
          
function createTable(data20260125) {
  const [headings, ...rows] = data20260125;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20260125));
