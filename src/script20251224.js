let data20251224 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                           ],
    ['0157', 'alles',     '',                                                                                                                ' ', ' ' , '' , 'Venite adoremus'                  ],
    ['0866', 'alles',     '<a href=coria/0866_Kyrie.html>                    <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Hodie, kyrie'                     ],
    ['0121', '1-2-3',     '<a href=coria/0121_EerZijGod.html>                <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Eer zij God'                      ],
    ['1256', '5-1-2-3-4', '<a href=coria/1256_GeenHerdersDieWaken.html>      <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'De herdertjes lagen bij nachte'   ],
    ['0178', 'alles',     '<a href=coria/0178_AdoraçaoDosPastores.html>      <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Adoraçao dos pastores'            ],
    ['0089', 'alles',     '<a href=coria/0089_SingJoyful.html>               <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Sing joyful praise'               ],
    ['0746', '1-4',       '<a href=coria/0746_DoorDeLiefdeLaatUWekken.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Door de liefde laat u wekken'     ],
    ['0342', '1-2-3',     '<a href=coria/0342_OmEenMensTeZijnOpAarde.html>   <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Om een mens te zijn'              ],
    ['1954', 'alles',     '<a href=coria/1954_GoedeVaderVanAlleVolken.html>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Goede Vader'                      ],
    ['1660', '1-5-6',     '<a href=coria/1660_Kerstzegen.html>               <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Kerstzegen'                       ],    
    ['1107', '1-2-3-4',   '',                                                                                                                ' ', ' ' , '' , 'God zal u redden'                 ]
];
          
function createTable(data20251224) {
  const [headings, ...rows] = data20251224;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20251224));
