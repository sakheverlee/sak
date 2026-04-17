<!-- script20260215.js -->

let data20260215 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                               ],
    ['0551', '1-3-4',     '<a href=coria/0551_GIJ_DIE_VOOR_ALLE_MENSEN.html>  <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Gij die voor alle mensen' ],
    ['0035', 'alles',     '<a href=coria/0035_KwaadEnZorgen.html>             <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Kwaad en zorgen'                   ],
    ['0731', '1-2-3',     '<a href=coria/0731_ZingVoorDeHeer.html>            <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Zing voor de Heer'              ],
    ['0001', '1-3-4',     '<a href=coria/0001_WieGodsRechteWegenGaat.html>    <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Wie Gods rechte wegen gaat'                 ],
    ['0609', 'alles',     '<a href=coria/0609_Tussenzang_Laten_wij_zijn.html> <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laten wij zijn als de levende stenen'                ],
    ['0537', '1-2-3',     '<a href=coria/0537_Heilig.html>                    <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heilig'                            ],
    ['0415', 'alles',     '<a href=coria/0415_VredeVoorAlleMensen.html>       <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede voor alle mensen'            ],
    ['0827', '1-2-4',     '<a href=csrc/missing.html>                         <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Het brood in de aarde'                  ],
    ['1484', 'alles',     '<a href=coria/1484_OpdatUwDroom.html>              <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Opdat uw droom'             ],
    ['1656', '1-2',       '<a href=src/missing.html>                          <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Wat zou de wereld anders zijn'         ]
];
          
function createTable(data20260215) {
  const [headings, ...rows] = data20260215;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20260215));
