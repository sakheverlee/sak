let data20251005 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['1700', '1-2-4',   '<a href=coria/.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Ankerlied'                       ],
    ['0480', 'alles',   '<a href=coria/.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'O Heer'                      ],
    ['1424', '1-2',     '<a href=coria/.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Gloria'              ],
    ['0433', '1-2-3-4', '<a href=coria/.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Wat vraagt de Heer nog meer'      ],
    ['1485', 'alles',   '<a href=coria/.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Kom luister naar mijn woorden'  ],
    ['0537', 'alles',   '<a href=coria/.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heilig'                      ],
    ['0415', 'alles',   '<a href=coria/.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede voor alle mensen'                        ],
    ['1150', '1-2-3',   '<a href=coria/.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Sta gelovig in het leven'            ],
    ['0464', 'alles',   '<a href=coria/.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Luister Heer'                       ],
    ['1607', '1-2',     '<a href=coria/.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Ga nu heen in vrede'        ]
];
          
function createTable(data20251005) {
  const [headings, ...rows] = data20251005;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20251005));
