let data20251101 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['0779', '1-2-3',   '<a href=coria/0779_MensenVanOveralAangewaaid.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Mensen van overal aangewaaid' ],
    ['0384', 'alles',   '<a href=coria/0384_Kyrie.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Mokonzi (Nederlands)' ],
    ['0589', '1-2-3',   '<a href=coria/0589_GloryBeToGodTheFather.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Glory be to God' ],
    ['1538', '1-2',     '',  ' ', ' ' , '' , 'ONTBREEKT: Als je eenvoudig bent'      ],
    ['1801', 'alles',   '<a href=coria/1801_Gelukkig.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Gelukkig'  ],
    ['0539', 'alles',   '<a href=coria/0539_Heilig.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heilig'                      ],
    ['1176', 'alles',   '',  ' ', ' ' , '' , 'ONTBREEKT: Ubi caritas'                        ],
    ['0385', '1-2-3',   '<a href=coria/0385_TelUwHerinneringen.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Tel uw herinneringen'                        ],
    ['0608', 'alles',   '<a href=coria/0608_GezongenGebedsrefrein.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laat ons bidden'                       ],
    ['1902', '1-2',     '<a href=coria/1902_TheRoadGoesEverOnAndOn.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'The road goes ever on and on'        ]
];
          
function createTable(data20251101) {
  const [headings, ...rows] = data20251101;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20251101));
