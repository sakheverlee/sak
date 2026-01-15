<!-- script20260201.js -->

let data20260201 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                               ],
    ['1513', '2-3-4',     '<a href=src/missing.html>                             <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Welkom' ],
    ['1587', 'alles',     '<a href=src/missing.html>                             <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Telkens weer'                       ],
    ['1147', '1-2',       '<a href=coria/1147_EerAanGod.html>                    <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Eer aan God'       ],
    ['1533', '1-2',       '<a href=src/missing.html>                             <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Steek de lamp aan' ],
    ['0404', 'alles',     '<a href=coria/0404_DatUwWoordenInOnsBranden.html>     <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Dat uw woorden in ons branden'                    ],
    ['1001', 'alles',     '<a href=coria/1001_VoorHetMooie.html>                 <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Voor het mooie, voor het goede'       ],
    ['0355', '1',         '<a href=coria/0355_GegroetJijDieHierKomtOmLicht.html> <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Drievoudige groet'                       ],
    ['1502', 'alles',     '<a href=coria/1502_LaatZoJeLichtMaarSchijnen.html>    <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laat zo je licht maar schijnen'                ],
    ['0412', 'alles',     '<a href=coria/0412_WaarMensenElkaarDragen.html>       <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Waar mensen elkaar dragen'                ],
    ['0405', '1-2',       '<a href=src/missing.html>                             <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Kom sla je handen in elkaar'              ]
];
          
function createTable(data20260201) {
  const [headings, ...rows] = data20260201;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20260201));

