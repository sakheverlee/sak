let dataMP3Peter525 = [
    ['nummer',  'mp3' , 'titel' ],
    ['ZJ_525', '<a href=MP3_Peter/ZJ_525-God_zij_geloofd_om_Kanaän.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_525-God_zij_geloofd_om_Kanaän'                             ],
    ['ZJ_526', '<a href=MP3_Peter/ZJ_526-Al_wat_er_nodig_is.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_526-Al_wat_er_nodig_is'                                    ],
    ['ZJ_527', '<a href=MP3_Peter/ZJ_527-Bekleedt_u_met_de_nieuwe_mens.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_527-Bekleedt_u_met_de_nieuwe_mens'                         ],
    ['ZJ_528', '<a href=MP3_Peter/ZJ_528-Gedenken_wij_dankbaar.mp3>                         <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_528-Gedenken_wij_dankbaar'                                 ],
    ['ZJ_529', '<a href=MP3_Peter/ZJ_529-Gij_dienaars_aan_de_Heer_gewijd.mp3>               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_529-Gij_dienaars_aan_de_Heer_gewijd'                       ],
    ['ZJ_530', '<a href=MP3_Peter/ZJ_530-Zo_vriendelijk_en_veilig.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_530-Zo_vriendelijk_en_veilig'                              ],
    ['ZJ_531', '<a href=MP3_Peter/ZJ_531-God_die_ons_heeft_voorzien.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_531-God_die_ons_heeft_voorzien'                            ],
    ['ZJ_532', '<a href=MP3_Peter/ZJ_532-O_Heer_die_overwint.mp3>                           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_532-O_Heer_die_overwint'                                   ],
    ['ZJ_533', '<a href=MP3_Peter/ZJ_533-Iedere_tijd_opnieuw.mp3>                           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_533-Iedere_tijd_opnieuw'                                   ],
    ['ZJ_534', '<a href=MP3_Peter/ZJ_534-Wie_naar_het_altaar_gaat.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_534-Wie_naar_het_altaar_gaat'                              ],
    ['ZJ_535', '<a href=MP3_Peter/ZJ_535-Het_brood_het_goede_brood.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_535-Het_brood_het_goede_brood'                             ],
    ['ZJ_537', '<a href=MP3_Peter/ZJ_537-God_geeft_gesproken_in_de_tijd.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_537-God_geeft_gesproken_in_de_tijd'                        ],
    ['ZJ_539', '<a href=MP3_Peter/ZJ_539-Dit_lied_gaat_over_Jezus.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_539-Dit_lied_gaat_over_Jezus'                              ],
    ['ZJ_540', '<a href=MP3_Peter/ZJ_540-Heer_onze_Heer_hoe_zijt_Gij_aanwezig.mp3>          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_540-Heer_onze_Heer_hoe_zijt_Gij_aanwezig'                  ],
    ['ZJ_541', '<a href=MP3_Peter/ZJ_541-God_heeft_het_eerste_woord.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_541-God_heeft_het_eerste_woord'                            ],
    ['ZJ_543', '<a href=MP3_Peter/ZJ_543-Zeven_was_voldoende.mp3>                           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_543-Zeven_was_voldoende'                                   ],
    ['ZJ_544', '<a href=MP3_Peter/ZJ_544-Ik_zal_zolang_ik_leef.mp3>                         <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_544-Ik_zal_zolang_ik_leef'                                 ],
    ['ZJ_545', '<a href=MP3_Peter/ZJ_545-Wij_willen_samen_vieren.mp3>                       <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_545-Wij_willen_samen_vieren'                               ],
    ['ZJ_546', '<a href=MP3_Peter/ZJ_546-Hij_nam_de_Schrift.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_546-Hij_nam_de_Schrift'                                    ],
    ['ZJ_547', '<a href=MP3_Peter/ZJ_547-Het_brood_in_de_aarde.mp3>                         <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_547-Het_brood_in_de_aarde'                                 ],
    ['ZJ_548', '<a href=MP3_Peter/ZJ_548-Zo_lief_heeft_God_de_wereld.mp3>                   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_548-Zo_lief_heeft_God_de_wereld'                           ],
    ['ZJ_549', '<a href=MP3_Peter/ZJ_549-Dit_huis_gerenigd_en_versierd.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_549-Dit_huis_gerenigd_en_versierd'                         ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter525) {
  const [headings, ...rows] = dataMP3Peter525;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter525));
