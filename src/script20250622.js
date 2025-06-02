let data20250622 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['0001', '1-2-4',   '',  ' ', ' ' , '' , 'Wie Gods rechte wegen gaat'           ],
    ['1799', 'alles',   '<a href=coria/1799_Toon_ons_uw_Zoon.html>           <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Toon ons uw zoon'                     ],
    ['0112', 'alles',   '<a href=coria/0112_GloriaSeiDirGesungen.html>       <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Gloria sei dir gesungen'              ],
    ['0373', '1-4-5',   '<a href=coria/0373_ZONNELIED_VAN_FRANCISCUS.html>   <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Zonnelied van Franciscus verdwijnen'  ],
    ['0609', 'alles',   '<a href=coria/0609_Tussenzang_Laten_wij_zijn.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laten wij zijn als de levende stenen' ],
    ['1507', 'alles',   '<a href=coria/1507_Heilig.html>                     <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heilig'                               ],
    ['1802', '1',       '<a href=coria/1802_ElHimnoDeLaPaz(Chili).html>      <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Paz paz paz'                          ],
    ['1706', 'alles',   '<a href=coria/1706_GEBED_VAN_SINT-FRANCISCUS.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Gebed van Sint Franciscus'            ],
    ['1951', 'alles',   '<a href=coria/1951_Heer_verhoor_ons.html>           <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heer verhoor ons'                     ],
    ['0089', 'alles',   '<a href=coria/0089_SingJoyful.html>                 <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Sing Joyful praise'                   ]
];
          
function createTable(data20250622) {
  const [headings, ...rows] = data20250622;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20250622));
