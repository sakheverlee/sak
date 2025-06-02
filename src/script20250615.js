let data20250615 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['1914', '1-2',     '<a href=coria/1914_JesusChristYouAreMyLife.html> <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Jezus Christ, You are my life'                 ],
    ['1799', 'alles',   '<a href=coria/1799_Toon_ons_uw_Zoon.html>        <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Toon ons uw Zoon'                              ],
    ['0587', 'alles',   '<a href=coria/0587_EerAanGodInDenHoge.html>      <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Eer aan God in den hoge'                       ],
    ['0041', '1-2-3',   '<a href=coria/0041_Pelgrimslied.html>            <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Pelgrimslied'                                  ],
    ['1485', 'alles',   '',                                                                                                               ' ', ' ' , '' , 'Kom luister naar mijn woorden'                 ],
    ['1507', 'alles',   '<a href=coria/1507_Heilig.html>                  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'O heilig'                                      ],
    ['1964', '1-4',     '',                                                                                                              ' ', ' ' , '' , 'Vrede voor jou en mij'                         ],
    ['0503', '1-2-3',   '<a href=coria/0503-B_LaatMijNietLos.html>        <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laat mij niet los'                             ],
    ['1954', 'alles',   '<a href=coria/1954_GoedeVaderVanAlleVolken.html> <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Goede vader'                                   ],
    ['0004', '1-2-3',   '<a href=coria/0004_PelgrimsVanHoop.html>         <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Pelgrims van hoop'                             ]
];
          
function createTable(data20250615) {
  const [headings, ...rows] = data20250615;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20250615));
