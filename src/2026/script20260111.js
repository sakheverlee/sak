let data20260111 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                               ],
    ['0301', '1-2-3',     '<a href=coria/0301_NieuweMensInOnsGeboren.html>       <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Nieuwe mens in ons geboren'    ],
    ['0384', 'alles',     '<a href=src/missing.html>                            <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Mokonzi'                       ],
    ['0587', '1-2-3',     '<a href=coria/0587_EerAanGodInDenHoge.html>           <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Eer aan God in den hoge'       ],
    ['1947', '1-2-3',     '<a href=src/missing.html>                            <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Johannes doopt bij de Jordaan' ],
    ['0381', 'alles',     '<a href=coria/0381_Thuma_Mina.html>                   <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Thuma mina'                    ],
    ['0377', 'alles',     '<a href=coria/0377_AllesWatUPrijzenKan.html>          <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Alles wat u prijzen kan'       ],
    ['0312', 'alles',     '<a href=src/missing.html>                            <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Sjaloom'                       ],
    ['1946', '1-2-3',     '<a href=coria/1946_DoopOnsHeer.html>                  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Doop ons, Heer'                ],
    ['1484', 'alles',     '<a href=coria/1484_OpdatUwDroom.html>                 <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Opdat uw droom'                ],
    ['1494', '1-3',       '<a href=coria/1494_OveralMetJezus.html>               <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Overal met Jezus'              ]
];
          
function createTable(data20260111) {
  const [headings, ...rows] = data20260111;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20260111));
