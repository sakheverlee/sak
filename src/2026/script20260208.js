<!-- script20260208.js -->

let data20260208 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                               ],
    ['1948', '1-2-3',     '<a href=src/missing.html>                        <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'De vreugde voert ons naar dit huis' ],
    ['1799', '1-2-3',     '<a href=coria/1799_Toon_ons_uw_Zoon.html>        <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Toon ons uw zoon'                   ],
    ['0278', 'alles',     '<a href=src/missing.html>                        <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laat ons met elkander'              ],
    ['0303', '1-2',       '<a href=coria/0303_LiedAanHetlicht.html>         <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Lied aan het licht'                 ],
    ['0511', 'alles',     '<a href=src/missing.html>                        <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Loflied op Christus'                ],
    ['0025', 'alles',     '<a href=coria/0025_Sanctus.html>                 <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Sanctus'                            ],
    ['0006', 'alles',     '<a href=src/missing.html>                        <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heer, verlicht ons hart'            ],
    ['0503', '1-2-3',     '<a href=coria/0503-B_LaatMijNietLos.html>        <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laat mij niet los'                  ],
    ['0427', 'alles',     '<a href=coria/0427_Heer_WeesOnsGenadig.html>     <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heer, wees ons genadig'             ],
    ['0529', 'alles',     '<a href=src/missing.html>                        <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Een huis om in te schuilen'         ]
];
          
function createTable(data20260208) {
  const [headings, ...rows] = data20260208;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20260208));
