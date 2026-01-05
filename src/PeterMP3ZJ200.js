let dataMP3Peter200 = [
    ['nummer',  'mp3' , 'titel' ],

    ['ZJ_201', '<a href=MP3_Peter/ZJ_201-Nu_zijt_wellekomen.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_201-Nu_zijt_wellekomen'                                    ],
    ['ZJ_202', '<a href=MP3_Peter/ZJ_202-Fonteint_Moeder.mp3>                               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_202-Fonteint_Moeder'                                       ],
    ['ZJ_203', '<a href=MP3_Peter/ZJ_203-De_mensen_die_gaan_in_het_duister.mp3>             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_203-De_mensen_die_gaan_in_het_duister'                     ],
    ['ZJ_204', '<a href=MP3_Peter/ZJ_204-Al_wie_dolend_in_het_donker.mp3>                   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_204-Al_wie_dolend_in_het_donker'                           ],
    ['ZJ_206', '<a href=MP3_Peter/ZJ_206-Komt_ons_in_diepe_nacht_ter_ore.mp3>               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_206-Komt_ons_in_diepe_nacht_ter_ore'                       ],
    ['ZJ_207', '<a href=MP3_Peter/ZJ_207-Voor_kleine_mensen.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_207-Voor_kleine_mensen'                                    ],
    ['ZJ_208', '<a href=MP3_Peter/ZJ_208-Er_is_een_roos_ontsprongen.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_208-Er_is_een_roos_ontsprongen'                            ],
    ['ZJ_209', '<a href=MP3_Peter/ZJ_209-Gods_genade_is_verschenen.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_209-Gods_genade_is_verschenen'                             ],
    ['ZJ_210', '<a href=MP3_Peter/ZJ_210-Heer_hoe_zijt_Gij_gekomen.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_210-Heer_hoe_zijt_Gij_gekomen'                             ],
    ['ZJ_211', '<a href=MP3_Peter/ZJ_211-Wat_werd_verhoopt.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_211-Wat_werd_verhoopt'                                     ],
    ['ZJ_212', '<a href=MP3_Peter/ZJ_212-Uit_uw_hemel_zonder_grenzen.mp3>                   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_212-Uit_uw_hemel_zonder_grenzen'                           ],
    ['ZJ_213', '<a href=MP3_Peter/ZJ_213-Heden_zult_gij_zijn_glorie_aanschouwen.mp3>        <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_213-Heden_zult_gij_zijn_glorie_aanschouwen'                ],
    ['ZJ_214', '<a href=MP3_Peter/ZJ_214-Vanwaar_zijt_Gij_gekomen.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_214-Vanwaar_zijt_Gij_gekomen'                              ],
    ['ZJ_215', '<a href=MP3_Peter/ZJ_215-Verschenen_is_de_mildheid.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_215-Verschenen_is_de_mildheid'                             ],
    ['ZJ_218', '<a href=MP3_Peter/ZJ_218-Komt_allen_tezamen.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_218-Komt_allen_tezamen'                                    ],
    ['ZJ_219', '<a href=MP3_Peter/ZJ_219-Het_volg_dat_wandelt_in_het_duister.mp3>           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_219-Het_volg_dat_wandelt_in_het_duister'                   ],
    ['ZJ_220', '<a href=MP3_Peter/ZJ_220-Daar_komt_een_schip_geladen.mp3>                   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_220-Daar_komt_een_schip_geladen'                           ],
    ['ZJ_221', '<a href=MP3_Peter/ZJ_221-Eer_zij_God_in_onze_dagen.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_221-Eer_zij_God_in_onze_dagen'                             ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter200) {
  const [headings, ...rows] = dataMP3Peter200;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter200));
