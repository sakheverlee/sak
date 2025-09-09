let data20250914 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['1606', '1-2-3',   '<a href=coria/1606_God_met_mij_op_alle_wegen.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'God met mij op alle wegen'                             ],
    ['1799', '1-2-3',   '<a href=coria/1799_Toon_ons_uw_Zoon.html>           <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Toon ons uw Zoon'            ],
    ['0166', 'alles',   '',  ' ', ' ' , '' , 'Eert God die onze Vader is'                    ],
    ['0560', '1-2',     '',  ' ', ' ' , '' , 'Heb Al heeft Hij ons verlaten'                             ],
    ['0381', 'alles',   '<a href=coria/0381_Thuma_Mina.html>                 <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Rond uw woord (Thuma mina)'                          ],
    ['0549', 'alles',   '<a href=coria/0549_LaudateOmnesGentes.html>         <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Lauate omnes gentes'                               ],
    ['0169', 'alles',   '<a href=coria/0169_DonaLaPace.html>                 <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Dona la pace, Signore'              ],
    ['0502', '1-2-3',   '<a href=coria/0502_AlWieDolendInHetDonker.html>     <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Al wie dolend in het donker'                   ],
    ['1484', 'alles',   '<a href=coria/1484_OpdatUwDroom.html>               <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Opdat uw droom'            ],
    ['0792', '1-2-3',   '<a href=coria/0792_Ga_dan_op_weg.html>              <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Ga dan op weg'                   ]
];
          
function createTable(data20250914) {
  const [headings, ...rows] = data20250914;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20250914));
