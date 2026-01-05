let dataMP3Peter100 = [
    ['nummer',  'mp3' , 'titel' ],

    ['ZJ_101', '<a href=MP3_Peter/ZJ_101-Ruk_Open_Heer.mp3>                                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_101-Ruk_Open_Heer'                                         ],
    ['ZJ_102', '<a href=MP3_Peter/ZJ_102-Heer_wij_roepen_om_erbarmen.mp3>                   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_102-Heer_wij_roepen_om_erbarmen'                           ],
    ['ZJ_103', '<a href=MP3_Peter/ZJ_103-Ik_heb_mijn_hart_tot_U_geheven.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_103-Ik_heb_mijn_hart_tot_U_geheven'                        ],
    ['ZJ_104', '<a href=MP3_Peter/ZJ_104-Kom_tot_ons_de_wereld_wacht.mp3>                   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_104-Kom_tot_ons_de_wereld_wacht'                           ],
    ['ZJ_105', '<a href=MP3_Peter/ZJ_105-Omdat_Hij_niet_ver_wou_zijn.mp3>                   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_105-Omdat_Hij_niet_ver_wou_zijn'                           ],
    ['ZJ_106', '<a href=MP3_Peter/ZJ_106-God_zij_geloofd_uit_alle_macht.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_106-God_zij_geloofd_uit_alle_macht'                        ],
    ['ZJ_107', '<a href=MP3_Peter/ZJ_107-Een_stad_van_vrede_zoeken_wij.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_107-Een_stad_van_vrede_zoeken_wij'                         ],
    ['ZJ_108', '<a href=MP3_Peter/ZJ_108-Op_een_God_die_door_de_eeuwen.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_108-Op_een_God_die_door_de_eeuwen'                         ],
    ['ZJ_109', '<a href=MP3_Peter/ZJ_109-Er_komt_gehoor_voor_onze_nood.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_109-Er_komt_gehoor_voor_onze_nood'                         ],
    ['ZJ_110', '<a href=MP3_Peter/ZJ_110-Als_groen_dat_in_de_wintertijd.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_110-Als_groen_dat_in_de_wintertijd'                        ],
    ['ZJ_111', '<a href=MP3_Peter/ZJ_111-Geen_kracht_meer_om_te_leven.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_111-Geen_kracht_meer_om_te_leven'                          ],
    ['ZJ_112', '<a href=MP3_Peter/ZJ_112-Kwam_van_Godswege.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_112-Kwam_van_Godswege'                                     ],
    ['ZJ_113', '<a href=MP3_Peter/ZJ_113-Naar_U_gaat_mijn_verlangen_Heer_I.mp3>             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_113-Naar_U_gaat_mijn_verlangen_Heer_I'                     ],
    ['ZJ_115', '<a href=MP3_Peter/ZJ_115-De_nacht_loopt_ten_einde.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_115-De_nacht_loopt_ten_einde'                              ],
    ['ZJ_116', '<a href=MP3_Peter/ZJ_116-Als_tussen_licht_en_donker.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_116-Als_tussen_licht_en_donker'                            ],
    ['ZJ_117', '<a href=MP3_Peter/ZJ_117-Verheft_uw_hart.mp3>                               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_117-Verheft_uw_hart'                                       ],
    ['ZJ_118', '<a href=MP3_Peter/ZJ_118-Houd_mij_in_leven.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_118-Houd_mij_in_leven'                                     ],
    ['ZJ_119', '<a href=MP3_Peter/ZJ_119-Verblijd_u_in_de_Heer.mp3>                         <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_119-Verblijd_u_in_de_Heer'                                 ],
    ['ZJ_120', '<a href=MP3_Peter/ZJ_120-Gij_zijt_een_mensenzoon.mp3>                       <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_120-Gij_zijt_een_mensenzoon'                               ],
    ['ZJ_121', '<a href=MP3_Peter/ZJ_121-O_kom_o_kom_Immanuel.mp3>                          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_121-O_kom_o_kom_Immanuel'                                  ],
    ['ZJ_123', '<a href=MP3_Peter/ZJ_123-Nu_daagt_het_in_het_oosten.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_123-Nu_daagt_het_in_het_oosten'                            ],
    ['ZJ_124', '<a href=MP3_Peter/ZJ_124-Bevrijd_ons_Heer.mp3>                              <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_124-Bevrijd_ons_Heer'                                      ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter100) {
  const [headings, ...rows] = dataMP3Peter100;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter100));
