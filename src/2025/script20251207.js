let data20251207 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                             ],
    ['1962', '*-2-3',     '<a href=coria/1962_AdventDatIs.html>                  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Advent dat is'               ],
    ['1182', '2',         '<a href=coria/1182_HetLiedVanDeKaarsen.html>          <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Het lied van de kaarsen'     ],
    ['0349', '6-7-8',     '<a href=coria/0349_LichtInOnzeOgen.html>              <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Licht in onze ogen'          ],
    ['0769', '1-3-2',     '<a href=coria/0769_KwamVanGodswege.html>              <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Kwam van Godswege'           ],
    ['1653', 'alles',     '<a href=coria/1653_AlleluiaBereidDeWegDesHeren.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Bereid de weg des Heren'    ],
    ['0537', 'alles',     '<a href=coria/0537_Heilig.html>                       <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heilig'                      ],
    ['0690', '1-2',       '<a href=coria/0690_VredeVoorIedereen.html>            <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede voor iedereen'         ],
    ['1577', '1-2',       '<a href=coria/1577_EffenDeWeg.html>                   <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Effen de weg'                ],
    ['1951', 'alles',     '<a href=coria/0300_LuisterHeer.html>                  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heer, verhoor ons'           ],
    ['0482', 'alles',     '<a href=src/missing.html>          <img src="src/missing.jpg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Wij gaan weer verder'               ]
];
          
function createTable(data20251207) {
  const [headings, ...rows] = data20251207;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20251207));
