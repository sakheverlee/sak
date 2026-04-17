let data20251214 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                               ],
    ['0872', '1-2-3-4-5', '<a href=coria/0872_WijSpeurenInHetDuister.html>       <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Wij speuren in het duister'    ],
    ['1182', '3',         '<a href=coria/1182_HetLiedVanDeKaarsen.html>          <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Het lied van de kaarsen'       ],
    ['1244', 'alles',     '<a href=src/missing.html>          <img src="src/missing.jpg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Lied om vergeving (melodie Rorate)'    ],
    ['0426', '1-2-3-4',   '<a href=coria/0426_WanneerZalDeMensTochKomen.html>    <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Wanneer zal de mens toch komen'],
    ['0394', 'alles',     '<a href=coria/0394_BlijfNietStaren.html>              <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Blijf niet staren'             ],
    ['1507', '1-2-3',     '<a href=coria/1507_Heilig.html>                       <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Driemaal heilig'               ],
    ['0140', 'alles',     '<a href=coria/0140_Da_pacem_domine.html>              <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Da pacem, Domine'              ],
    ['0882', '4-5-6',     '<a href=src/missing.html>          <img src="src/missing.jpg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Zal er ooit een dag van vrede'         ],
    ['0412', 'alles',     '<a href=coria/0412_WaarMensenElkaarDragen.html>       <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Waar mensen elkaar dragen'     ],
    ['0422', '1-2',       '<a href=coria/0422_BlijfNietStaan.html>               <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Blijf niet staan'              ]
];
          
function createTable(data20251214) {
  const [headings, ...rows] = data20251214;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20251214));
