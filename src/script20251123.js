let data20251123 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                         ],
    ['1917', '1-4',      '<a href=coria/1917_AdoramusTe.html>            <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Adoramus te'                     ],
    ['0338', 'refrein',  '<a href=coria/0338_JouOntmoeten.html>          <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Jou ontmoeten'                   ],
    ['0372', '1-2-3-4',  '',  ' ', ' ' , '' , 'Nkembo'                                                                                                                                     ],
    ['1382', '1-2-3',     '',                                                                                                              ' ', ' ' , '' , 'Yakanaka vhangeri'             ],
    ['0381', 'alles',   '<a href=coria/0381_Thuma_Mina.html>             <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Thuma Mina: Rond uw woord'       ],
    ['0284', '1-3',     '<a href=coria/0284_JijHebtEenNaam.html>         <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Jij hebt een naam'               ],
    ['1001', '1',       '<a href=coria/1001_VoorHetMooie.html>           <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Voor het mooie, voor het goede'  ],
    ['0415', '1-2-3',   '<a href=coria/0415_VredeVoorAlleMensen.html>    <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede voor alle mensen'          ],
    ['0421', '1-2-3',   '<a href=coria/0421_JijDieBent.html>             <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Jij die bent'                    ],
    ['1502', 'alles',   '',  ' ', ' ' , '' , 'Laat zo je licht maar schijnen'                                                                                                              ],
    ['1511', '1-2',      '<a href=coria/1511_HeerWeesMijnKracht.html>    <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heer, wees mijn kracht'          ]
];
          
function createTable(data20251123) {
  const [headings, ...rows] = data20250601;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20251123));
