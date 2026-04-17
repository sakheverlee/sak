let dataMP3Peter300 = [
    ['nummer',  'mp3' , 'titel' ],
    ['ZJ_301', '<a href=MP3_Peter/ZJ_301-Veel_hoger_dan_Abraham_klom.mp3>                   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_301-Veel_hoger_dan_Abraham_klom'                           ],
    ['ZJ_302', '<a href=MP3_Peter/ZJ_302-Gij_hebt_met_groot_geduld.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_302-Gij_hebt_met_groot_geduld'                             ],
    ['ZJ_303', '<a href=MP3_Peter/ZJ_303-Uit_diepten_van_ellende.mp3>                       <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_303-Uit_diepten_van_ellende'                               ],
    ['ZJ_304', '<a href=MP3_Peter/ZJ_304-Evenals_een_moede_hinde.mp3>                       <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_304-Evenals_een_moede_hinde'                               ],
    ['ZJ_306', '<a href=MP3_Peter/ZJ_306-Een_mens_te_zijn_op_aarde.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_306-Een_mens_te_zijn_op_aarde'                             ],
    ['ZJ_309', '<a href=MP3_Peter/ZJ_309-Zo_spreekt_de_Heer.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_309-Zo_spreekt_de_Heer'                                    ],
    ['ZJ_310', '<a href=MP3_Peter/ZJ_310-Uit_angst_en_nood.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_310-Uit_angst_en_nood'                                     ],
    ['ZJ_312', '<a href=MP3_Peter/ZJ_312-Die_vroeg_zijn_aangeworven.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_312-Die_vroeg_zijn_aangeworven'                            ],
    ['ZJ_313', '<a href=MP3_Peter/ZJ_313-Uit_de_diepten_roep_ik_U_Heer.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_313-Uit_de_diepten_roep_ik_U_Heer'                         ],
    ['ZJ_314', '<a href=MP3_Peter/ZJ_314-Uit_diepten_van_ellende.mp3>                       <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_314-Uit_diepten_van_ellende'                               ],
    ['ZJ_315', '<a href=MP3_Peter/ZJ_315-Wij_roepen_Heer.mp3>                               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_315-Wij_roepen_Heer'                                       ],
    ['ZJ_316', '<a href=MP3_Peter/ZJ_316-Barmhartige_Heer.mp3>                              <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_316-Barmhartige_Heer'                                      ],
    ['ZJ_317', '<a href=MP3_Peter/ZJ_317-Israël_trok_Egypte_uit.mp3>                        <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_317-Israël_trok_Egypte_uit'                                ],
    ['ZJ_318', '<a href=MP3_Peter/ZJ_318-Onze_hulp_is_de_naam_van_de_Heer.mp3>              <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_318-Onze_hulp_is_de_naam_van_de_Heer'                      ],
    ['ZJ_319', '<a href=MP3_Peter/ZJ_319-De_zonden_zijn_vergeven.mp3>                       <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_319-De_zonden_zijn_vergeven'                               ],
    ['ZJ_320', '<a href=MP3_Peter/ZJ_320-Erbarm_U_God_en_delg_genadig.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_320-Erbarm_U_God_en_delg_genadig'                          ],
    ['ZJ_322', '<a href=MP3_Peter/ZJ_322-Uit_Oer_is_hij_getogen.mp3>                        <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_322-Uit_Oer_is_hij_getogen'                                ],
    ['ZJ_323', '<a href=MP3_Peter/ZJ_323-Oud_het_leven_dat_wij_leiden.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_323-Oud_het_leven_dat_wij_leiden'                          ],
    ['ZJ_324', '<a href=MP3_Peter/ZJ_324-Waar_is_de_plaats_die_vrede_lacht.mp3>             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_324-Waar_is_de_plaats_die_vrede_lacht'                     ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter300) {
  const [headings, ...rows] = dataMP3Peter300;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter300));
