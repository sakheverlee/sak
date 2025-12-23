let data20250921 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['0325', '1-2-3',   '<a href=coria/0325_VredeVoorJou.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede voor jou'                             ],
    ['0005', 'alles',   '',  ' ', ' ' , '' , 'Laat uw liefde (nieuw)'            ],
    ['0587', '1-2-3',   '<a href=coria/0587_EerAanGodInDenHoge.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Eer aan God in den hoge'                    ],
    ['0355', '1-2-3',   '<a href=coria/0355_GegroetJijDieHierKomtOmLicht.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Drievoudige groet'                             ],
    ['0876', 'alles',   '<a href=coria/0876_UwWoordIsEenLamp.html>                 <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Uw woord is een lamp'                          ],
    ['1153', 'alles',   '<a href=coria/1153_LAUDATE_DOMINUM.html>         <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laudate Dominum'                               ],
    ['0877', 'alles',   '<a href=coria/0877_ZingNuDitLied.html>                 <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Zing nu dit lied'              ],
    ['0882', '1-2-3',   '',  ' ', ' ' , '' , 'Zal er ooit een dag van vrede (nieuw)'                   ],
    ['0300', 'alles',   '<a href=coria/0300_LuisterHeer.html>               <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Luister Heer'            ],
    ['1914', '1-2',     '',  ' ', ' ' , '' , 'Jesus Christ, you are my life'                   ]
];
          
function createTable(data20250921) {
  const [headings, ...rows] = data20250921;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20250921));
