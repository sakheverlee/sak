let data20251130 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                             ],
    ['0424', '1-2-3',     '<a href=coria/0424_AdventIsDromen.html>           <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Advent is dromen'                   ],
    ['1182', '1',         '<a href=coria/1182_HetLiedVanDeKaarsen.html>      <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Het lied van de kaarsen'            ],
    ['0349', '6-7-8',     '<a href=coria/0349_LichtInOnzeOgen.html>          <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Licht in onze ogen'                 ],
    ['1963', '1-3-2',     '<a href=coria/1963_FluisterDanDatJeGelooft.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Fluister dan dat je gelooft'        ],
    ['0876', 'alles',     '<a href=coria/0876_UwWoordIsEenLamp.html>         <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Uw woord is een lamp'               ],
    ['0377', 'alles',     '<a href=coria/0377_AllesWatUPrijzenKan.html>      <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Alles wat U prijzen kan'            ],
    ['0192', '1-2',       '<a href=coria/0192_BekommerdOmVrede.html>         <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Bekommerd om vrede'                 ],
    ['0272', '1-2',       '<a href=src/missing.html>              <img src="src/missing.jpg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Is droom een droom?'                ],
    ['0300', 'alles',     '<a href=coria/0300_LuisterHeer.html>              <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Luister, Heer, verhoor ons bidden'  ],
    ['0917', 'alles',     '<a href=coria/0917_OldIrishBlessing.html>         <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Old Irish blessing'                 ]
];
          
function createTable(data20251130) {
  const [headings, ...rows] = data20251130;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20251130));
