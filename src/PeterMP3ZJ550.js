let dataMP3Peter550 = [
    ['nummer',  'mp3' , 'titel' ],
    ['ZJ_550', '<a href=MP3_Peter/ZJ_550-Welzalig_wie_de_rechte_wegen_gaan.mp3>             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_550-Welzalig_wie_de_rechte_wegen_gaan'                     ],
    ['ZJ_551', '<a href=MP3_Peter/ZJ_551-De_heiligen_ons_voorgegaan.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_551-De_heiligen_ons_voorgegaan'                            ],
    ['ZJ_552', '<a href=MP3_Peter/ZJ_552-Voor_de_toegewijden.mp3>                           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_552-Voor_de_toegewijden'                                   ],
    ['ZJ_553', '<a href=MP3_Peter/ZJ_553-Waarlijk_dit_is_rechtvaardig.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_553-Waarlijk_dit_is_rechtvaardig'                          ],
    ['ZJ_554', '<a href=MP3_Peter/ZJ_554-God_groet_u_zuiver_bloeme.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_554-God_groet_u_zuiver_bloeme'                             ],
    ['ZJ_556', '<a href=MP3_Peter/ZJ_556-Wachters_van_de_tijd.mp3>                          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_556-Wachters_van_de_tijd'                                  ],
    ['ZJ_557', '<a href=MP3_Peter/ZJ_557-Maria_schone_Vrouwe.mp3>                           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_557-Maria_schone_Vrouwe'                                   ],
    ['ZJ_558', '<a href=MP3_Peter/ZJ_558-Maria_poort_van_Gods_genade.mp3>                   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_558-Maria_poort_van_Gods_genade'                           ],
    ['ZJ_559', '<a href=MP3_Peter/ZJ_559-De_Heer_heeft_mij_gezien.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_559-De_Heer_heeft_mij_gezien'                              ],
    ['ZJ_560', '<a href=MP3_Peter/ZJ_560-Zalig_zij_die_Jezus_naam_belijden.mp3>             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_560-Zalig_zij_die_Jezus_naam_belijden'                     ],
    ['ZJ_561', '<a href=MP3_Peter/ZJ_561-Wij_zijn_uw_volk.mp3>                              <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_561-Wij_zijn_uw_volk'                                      ],
    ['ZJ_562', '<a href=MP3_Peter/ZJ_562-Jezus_die_langs_het_water_liep.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_562-Jezus_die_langs_het_water_liep'                        ],
    ['ZJ_563', '<a href=MP3_Peter/ZJ_563-Heer_Gij_zijt_burcht_en_toren.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_563-Heer_Gij_zijt_burcht_en_toren'                         ],
    ['ZJ_563', '<a href=MP3_Peter/ZJ_563-Heer_Gij_zijt_burcht_en_toren_v2.mp3>              <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_563-Heer_Gij_zijt_burcht_en_toren_v2'                      ],
    ['ZJ_564', '<a href=MP3_Peter/ZJ_564-Weest_niet_bezorgd.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_564-Weest_niet_bezorgd'                                    ],
    ['ZJ_565', '<a href=MP3_Peter/ZJ_565-Ik_verheerlijk_de_Heer.mp3>                        <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_565-Ik_verheerlijk_de_Heer'                                ],
    ['ZJ_566', '<a href=MP3_Peter/ZJ_566-Hoe_is_uw_naam.mp3>                                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_566-Hoe_is_uw_naam'                                        ],
    ['ZJ_567', '<a href=MP3_Peter/ZJ_567-Een_smekeling_zo_kom_ik_tot_uw_troon.mp3>          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_567-Een_smekeling_zo_kom_ik_tot_uw_troon'                  ],
    ['ZJ_569', '<a href=MP3_Peter/ZJ_569-God_die_leven_hebt_gegeven.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_569-God_die_leven_hebt_gegeven'                            ],
    ['ZJ_570', '<a href=MP3_Peter/ZJ_570-Gij_zijt_mijn_goed_mijn_overvloed.mp3>             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_570-Gij_zijt_mijn_goed_mijn_overvloed'                     ],
    ['ZJ_571', '<a href=MP3_Peter/ZJ_571-Niet_als_een_storm.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_571-Niet_als_een_storm'                                    ],
    ['ZJ_572', '<a href=MP3_Peter/ZJ_572-De_aarde_is_vervuld.mp3>                           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_572-De_aarde_is_vervuld'                                   ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter550) {
  const [headings, ...rows] = dataMP3Peter550;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter550));
