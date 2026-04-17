let dataMP3Peter575 = [
    ['nummer',  'mp3' , 'titel' ],
    ['ZJ_575', '<a href=MP3_Peter/ZJ_575-Zolang_er_mensen_zijn_op_aarde.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_575-Zolang_er_mensen_zijn_op_aarde'                        ],
    ['ZJ_576', '<a href=MP3_Peter/ZJ_576-Bouwen_aan_een_wereld.mp3>                         <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_576-Bouwen_aan_een_wereld'                                 ],
    ['ZJ_578', '<a href=MP3_Peter/ZJ_578-Volk_van_God.mp3>                                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_578-Volk_van_God'                                          ],
    ['ZJ_579', '<a href=MP3_Peter/ZJ_579-Uw_koninkrijk_komt.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_579-Uw_koninkrijk_komt'                                    ],
    ['ZJ_580', '<a href=MP3_Peter/ZJ_580-Zoals_een_hert_reikhalst.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_580-Zoals_een_hert_reikhalst'                              ],
    ['ZJ_581', '<a href=MP3_Peter/ZJ_581-Mijn_God_zijt_Gij.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_581-Mijn_God_zijt_Gij'                                     ],
    ['ZJ_583', '<a href=MP3_Peter/ZJ_583-Alles_wat_adem_heeft.mp3>                          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_583-Alles_wat_adem_heeft'                                  ],
    ['ZJ_585', '<a href=MP3_Peter/ZJ_585-Dankt_dankt_nu_allen_God.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_585-Dankt_dankt_nu_allen_God'                              ],
    ['ZJ_588', '<a href=MP3_Peter/ZJ_588-God_in_den_hoog_alleen.mp3>                        <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_588-God_in_den_hoog_alleen'                                ],
    ['ZJ_589', '<a href=MP3_Peter/ZJ_589-De_laatsten_worden_de_eersten.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_589-De_laatsten_worden_de_eersten'                         ],
    ['ZJ_590', '<a href=MP3_Peter/ZJ_590-De_eersten_zijn_de_laatsten.mp3>                   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_590-De_eersten_zijn_de_laatsten'                           ],
    ['ZJ_591', '<a href=MP3_Peter/ZJ_591-Mensen_wij_zijn_geroepen_om_te_leven.mp3>          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_591-Mensen_wij_zijn_geroepen_om_te_leven'                  ],
    ['ZJ_593', '<a href=MP3_Peter/ZJ_593-Ga_in_het_schip.mp3>                               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_593-Ga_in_het_schip'                                       ],
    ['ZJ_594', '<a href=MP3_Peter/ZJ_594-Wie_oren_om_te_horen_heeft.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_594-Wie_oren_om_te_horen_heeft'                            ],
    ['ZJ_595', '<a href=MP3_Peter/ZJ_595-Mijn_ziel_maakt_groot_de_Heer.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_595-Mijn_ziel_maakt_groot_de_Heer'                         ],
    ['ZJ_596', '<a href=MP3_Peter/ZJ_596-Een_zaaier_ging_uit.mp3>                           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_596-Een_zaaier_ging_uit'                                   ],
    ['ZJ_597', '<a href=MP3_Peter/ZJ_597-Gij_hebt_met_uw_brede_gebaren.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_597-Gij_hebt_met_uw_brede_gebaren'                         ],
    ['ZJ_598', '<a href=MP3_Peter/ZJ_598-De_schapen_alle_honderd.mp3>                       <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_598-De_schapen_alle_honderd'                               ],
    ['ZJ_599', '<a href=MP3_Peter/ZJ_599-Looft_uwe_God_alle_tongen_en_talen.mp3>            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_599-Looft_uwe_God_alle_tongen_en_talen'                    ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter575) {
  const [headings, ...rows] = dataMP3Peter575;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter575));
