let data20250629 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['0478', '1-2-3',   '<a href=coria/0478_Danklied.html>                   <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Danklied'                             ],
    ['0384', 'alles',   '',  ' ', ' ' , '' , 'Mokonzi in het Nederlands'            ],
    ['0731', '1-2-3',   '',  ' ', ' ' , '' , 'Zing voor de Heer'                     ],
    ['0865', '1-2',     '',  ' ', ' ' , '' , 'Heb dank'                             ],
    ['1609', 'alles',   '<a href=coria/1609_Dank_U_Heer.html>                <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Dank u Heer'                          ],
    ['0539', 'alles',   '',  ' ', ' ' , '' , 'Heilig'                               ],
    ['0006', 'alles',   '',  ' ', ' ' , '' , 'Heer, verlicht ons hart'              ],
    ['1655', '1-2-3',   '<a href=coria/1655_Het_lied_van_samen.html>         <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Het lied van samen'                   ],
    ['0412', 'alles',   '<a href=coria/0412_WaarMensenElkaarDragen.html>     <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Waar mensen elkaar dragen'            ],
    ['0917', 'alles',   '<a href=coria/0917_OldIrishBlessing.html>           <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Old Irish blessing'                   ]
];
          
function createTable(data20250629) {
  const [headings, ...rows] = data20250629;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20250629));
