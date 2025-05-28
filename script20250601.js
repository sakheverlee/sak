let data20250601 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['0916', '1-2-3',   '<a href=./0916_GeproefdGeleefdHerkend.html> <img src="./quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Geproefd, geleefd herkend (Geen ander brood)'  ],
    ['0035', 'alles',   '<a href=./0035_KwaadEnZorgen.html>          <img src="./quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Kwaad en zorgen'                               ],
    ['0266', 'alles',   '<a href=./0266_Here_der_Heren.html>         <img src="./quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Here der heren'                                ],
    ['0227', '1-2',     '',                                                                                                        ' ', ' ' , '' , 'Woorden verdwijnen'                            ],
    ['0381', 'alles',   '<a href=./0381_Thuma_Mina.html>             <img src="./quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Thuma Mina: Rond uw woord'                     ],
    ['0377', 'alles',   '<a href=./0377_AllesWatUPrijzenKan.html>    <img src="./quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Alles wat u prijzen kan'                       ],
    ['1612', '1',       '<a href=./1612_Vrede_van_God.html>          <img src="./quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede van God'                                 ],
    ['0338', '1-2-3',   '<a href=./0338_JouOntmoeten.html>           <img src="./quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Jou ontmoeten'                                 ],
    ['1484', 'alles',   '<a href=./1484_OpdatUwDroom.html>           <img src="./quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Opdat uw droom'                                ],
    ['0244', '1-2-3-4', '<a href=./0244_WakendUitzien.html>          <img src="./quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Waken uitzien'                                 ]
];
          
function createTable(data20250601) {
  const [headings, ...rows] = data20250601;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20250601));
