let data20251019 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['1606', '1-2-3',   '',  ' ', ' ' , '' , 'God met mij op alle wegen'                       ],
    ['0540', 'alles',   '<a href=coria/0480_Kyrie.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Gebed om vergeving'                      ],
    ['1424', '1-2',     '<a href=coria/1424_GloriaGloria.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Gloria'              ],
    ['1132', '1-2-3',   '',  ' ', ' ' , '' , 'Als gij naar de woorden luistert'      ],
    ['0381', 'alles',   '<a href=coria/1485_KomLuisterNaarMijnWoorden.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Rond uw woord'  ],
    ['0377', 'alles',   '<a href=coria/0537_Heilig.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Alles wat u prijzen kan'                      ],
    ['1612', '1',       '<a href=coria/0415_VredeVoorAlleMensen.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede van God'                        ],
    ['0865', '1-2',     '',  ' ', ' ' , '' , 'Heb dank'            ],
    ['0300', 'alles',   '<a href=coria/0464_Litanie_van_alle_heiligen.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Luister Heer, verhoor ons bidden'                       ],
    ['0793', '2-3',     '',  ' ', ' ' , '' , 'Sta op, volk van God'        ]
];
          
function createTable(data20251019) {
  const [headings, ...rows] = data20251019;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20251019));
