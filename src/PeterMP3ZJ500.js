let dataMP3Peter500 = [
    ['nummer',  'mp3' , 'titel' ],
    ['ZJ_501', '<a href=MP3_Peter/ZJ_501-Nu_looft_en_prijst_mijn_ziel_de_Heer.mp3>          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_501-Nu_looft_en_prijst_mijn_ziel_de_Heer'                  ],
    ['ZJ_502', '<a href=MP3_Peter/ZJ_502-Verkondig_alle_mensen.mp3>                         <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_502-Verkondig_alle_mensen'                                 ],
    ['ZJ_503', '<a href=MP3_Peter/ZJ_503-Zingt_een_nieuw_lied_voor_de_Heer.mp3>             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_503-Zingt_een_nieuw_lied_voor_de_Heer'                     ],
    ['ZJ_504', '<a href=MP3_Peter/ZJ_504-Wanneer_ik_door_de_velden_ga.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_504-Wanneer_ik_door_de_velden_ga'                          ],
    ['ZJ_505', '<a href=MP3_Peter/ZJ_505-Zoals_een_hert_verlangt.mp3>                       <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_505-Zoals_een_hert_verlangt'                               ],
    ['ZJ_506', '<a href=MP3_Peter/ZJ_506-Mijn_Herder_zijt_Gij.mp3>                          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_506-Mijn_Herder_zijt_Gij'                                  ],
    ['ZJ_507', '<a href=MP3_Peter/ZJ_507-Gij_zijt_een_bron.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_507-Gij_zijt_een_bron'                                     ],
    ['ZJ_508', '<a href=MP3_Peter/ZJ_508-Die_rechtens_God_gelijk.mp3>                       <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_508-Die_rechtens_God_gelijk'                               ],
    ['ZJ_509', '<a href=MP3_Peter/ZJ_509-Mens_voor_de_mensen.mp3>                           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_509-Mens_voor_de_mensen'                                   ],
    ['ZJ_511', '<a href=MP3_Peter/ZJ_511-De_Heer_is_Koning.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_511-De_Heer_is_Koning'                                     ],
    ['ZJ_512', '<a href=MP3_Peter/ZJ_512-Eert_God_die_onze_Vader_is.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_512-Eert_God_die_onze_Vader_is'                            ],
    ['ZJ_514', '<a href=MP3_Peter/ZJ_514-Zolang_er_mensen_zijn_op_aarde.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_514-Zolang_er_mensen_zijn_op_aarde'                        ],
    ['ZJ_516', '<a href=MP3_Peter/ZJ_516-Geef_vrede_Heer_geef_vrede.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_516-Geef_vrede_Heer_geef_vrede'                            ],
    ['ZJ_518', '<a href=MP3_Peter/ZJ_518-Laat_ieder_s_Heren_goedheid_prijzen.mp3>           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_518-Laat_ieder_s_Heren_goedheid_prijzen'                   ],
    ['ZJ_519', '<a href=MP3_Peter/ZJ_519-Zingt_een_nieuw_lied_voor_God_de_Here.mp3>         <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_519-Zingt_een_nieuw_lied_voor_God_de_Here'                 ],
    ['ZJ_520', '<a href=MP3_Peter/ZJ_520-Heer_onze_Heer_hoe_heerlijk_en_verheven.mp3>       <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_520-Heer_onze_Heer_hoe_heerlijk_en_verheven'               ],
    ['ZJ_521', '<a href=MP3_Peter/ZJ_521-De_Heer_richt_op_zijn_berg_een_maaltijd_aan.mp3>   <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_521-De_Heer_richt_op_zijn_berg_een_maaltijd_aan'           ],
    ['ZJ_522', '<a href=MP3_Peter/ZJ_522-Heer_laat_mij_voor_uw_altaar_komen.mp3>            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_522-Heer_laat_mij_voor_uw_altaar_komen'                    ],
    ['ZJ_522', '<a href=MP3_Peter/ZJ_522-Heer_laat_mij_voor_uw_altaar_komen_-_bis.mp3>      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_522-Heer_laat_mij_voor_uw_altaar_komen_-_bis'              ],
    ['ZJ_523', '<a href=MP3_Peter/ZJ_523-O_goddelijk_alvermogen.mp3>                        <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_523-O_goddelijk_alvermogen'                                ],
    ['ZJ_524', '<a href=MP3_Peter/ZJ_524-Samen_op_de_aarde.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_524-Samen_op_de_aarde'                                     ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter500) {
  const [headings, ...rows] = dataMP3Peter500;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter500));
