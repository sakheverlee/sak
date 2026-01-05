let dataMP3Peter125 = [
    ['nummer',  'mp3' , 'titel' ],

    ['ZJ_125', '<a href=MP3_Peter/ZJ_125-Zal_er_ooit_en_dag_van_vrede.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_125-Zal_er_ooit_en_dag_van_vrede'                          ],
    ['ZJ_126', '<a href=MP3_Peter/ZJ_126-Als_die_koning_zal_verschijnen.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_126-Als_die_koning_zal_verschijnen'                        ],
    ['ZJ_126', '<a href=MP3_Peter/ZJ_126-Als_die_koning_zal_verschijnen_2.mp3>              <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_126-Als_die_koning_zal_verschijnen_2'                      ],
    ['ZJ_127', '<a href=MP3_Peter/ZJ_127-Licht_in_onze_ogen.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_127-Licht_in_onze_ogen'                                    ],
    ['ZJ_128', '<a href=MP3_Peter/ZJ_128-Wij_zingen_door_de_tranen_heen.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_128-Wij_zingen_door_de_tranen_heen'                        ],
    ['ZJ_129', '<a href=MP3_Peter/ZJ_129-Wij_wachten_op_de_koning.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_129-Wij_wachten_op_de_koning'                              ],
    ['ZJ_130', '<a href=MP3_Peter/ZJ_130-Tastend_langs_de_wand.mp3>                         <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_130-Tastend_langs_de_wand'                                 ],
    ['ZJ_131', '<a href=MP3_Peter/ZJ_131-Bode_die_zijn_weg_bereidde.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_131-Bode_die_zijn_weg_bereidde'                            ],
    ['ZJ_132', '<a href=MP3_Peter/ZJ_132-Gij_zijt_de_wereld_aangekondigd.mp3>               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_132-Gij_zijt_de_wereld_aangekondigd'                       ],
    ['ZJ_133', '<a href=MP3_Peter/ZJ_133-Gij_die_aangeroepen_wordt.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_133-Gij_die_aangeroepen_wordt'                             ],
    ['ZJ_134', '<a href=MP3_Peter/ZJ_134-Doorbreek_de_ban_van_ons_gemis.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_134-Doorbreek_de_ban_van_ons_gemis'                        ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter125) {
  const [headings, ...rows] = dataMP3Peter125;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter125));
