let data20251019 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['1606', '1-2-3',   '<a href=coria/1606_God_met_mij_op_alle_wegen.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'God met mij op alle wegen'                       ],
    ['0540', 'alles',   '<a href=coria/0540_GebedOmVergeving.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Gebed om vergeving'                      ],
    ['1424', '1-2',     '<a href=coria/1424_GloriaGloria.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Gloria'              ],
    ['1132', '1-2-3',   '',  ' ', ' ' , '' , 'ONTBREEKT: Als gij naar de woorden luistert'      ],
    ['0381', 'alles',   '<a href=coria/0381_Thuma_Mina.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Rond uw woord'  ],
    ['0377', 'alles',   '<a href=coria/0377_AllesWatUPrijzenKan.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Alles wat u prijzen kan'                      ],
    ['1612', '1',       '<a href=coria/1612_Vrede_van_God.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede van God'                        ],
    ['0865', '1-2',     '<a href=coria/0865_HebDank.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heb dank'            ],
    ['0300', 'alles',   '<a href=coria/0300_LuisterHeer.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Luister Heer, verhoor ons bidden'                       ],
    ['0793', '2-3',     '<a href=coria/0793_STA_OP_VOLK_VAN_GOD.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Sta op, volk van God'        ]
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
