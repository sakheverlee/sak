let data20251221 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                                  ],
    ['0872', '1-2-3-4-5', '<a href=coria/0872_WijSpeurenInHetDuister.html>       <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Wij speuren in het duister'      ],
    ['1182', '4',         '<a href=coria/1182_HetLiedVanDeKaarsen.html>          <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Het lied van de kaarsen'         ],
    ['0349', '6-7-8',     '<a href=coria/0349_LichtInOnzeOgen.html>              <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Licht in onze ogen'              ],
    ['0421', '1-2-3',     '<a href=coria/0421_JijDieBent.html>                   <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Jij, die bent'                   ],
    ['0005', 'alles',     '<a href=src/0005_LaatUwLiefde.html>                   <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laat uw liefde'                  ],
    ['1153', 'alles',     '<a href=coria/1153_LAUDATE_DOMINUM.html>              <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laudate dominum'                 ],
    ['0415', 'alles',     '<a href=coria/0415_VredeVoorAlleMensen.html>          <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede voor alle mensen'          ],
    ['0875', '1-2',       '<a href=src/missing.html>                             <img src="src/missing.jpg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Ik heb mijn hart tot U geheven'  ],
    ['1484', 'alles',     '<a href=coria/1484_OpdatUwDroom.html>                 <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Opdat uw droom'                  ],
    ['1511', '1-2-3',     '<a href=coria/1511_HeerWeesMijnKracht.html>           <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Heer, wees mijn kracht'          ]
];
          
function createTable(data20251221) {
  const [headings, ...rows] = data20251221;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20251221));
