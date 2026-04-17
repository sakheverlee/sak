let dataMP3Peter400 = [
    ['nummer',  'mp3' , 'titel' ],
    ['ZJ_401', '<a href=MP3_Peter/ZJ_401-Zingt_Jubilate.mp3>                                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_401-Zingt_Jubilate'                                        ],
    ['ZJ_402', '<a href=MP3_Peter/ZJ_402-Zingt_voor_de_Heer_een_nieuw_gezang.mp3>           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_402-Zingt_voor_de_Heer_een_nieuw_gezang'                   ],
    ['ZJ_403', '<a href=MP3_Peter/ZJ_403-Gij_zijt_in_glans_verschenen.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_403-Gij_zijt_in_glans_verschenen'                          ],
    ['ZJ_404', '<a href=MP3_Peter/ZJ_404-Juicht_Jahweh_toe.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_404-Juicht_Jahweh_toe'                                     ],
    ['ZJ_405', '<a href=MP3_Peter/ZJ_405-Christus_is_verrezen.mp3>                          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_405-Christus_is_verrezen'                                  ],
    ['ZJ_406', '<a href=MP3_Peter/ZJ_406-Kondig_het_aan_de_Heer_is_verrezen.mp3>            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_406-Kondig_het_aan_de_Heer_is_verrezen'                    ],
    ['ZJ_407', '<a href=MP3_Peter/ZJ_407-In_eigen_kracht_verrezen.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_407-In_eigen_kracht_verrezen'                              ],
    ['ZJ_408', '<a href=MP3_Peter/ZJ_408-Naam_van_Jezus_nu_verheven.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_408-Naam_van_Jezus_nu_verheven'                            ],
    ['ZJ_409', '<a href=MP3_Peter/ZJ_409-Kom_Schepper_Geest.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_409-Kom_Schepper_Geest'                                    ],
    ['ZJ_410', '<a href=MP3_Peter/ZJ_410-De_Geest_des_Heren.mp3>                            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_410-De_Geest_des_Heren'                                    ],
    ['ZJ_411', '<a href=MP3_Peter/ZJ_411-De_Geest_uit_vier_gewesten.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_411-De_Geest_uit_vier_gewesten'                            ],
    ['ZJ_412', '<a href=MP3_Peter/ZJ_412-Al_heeft_Hij_ons_verlaten.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_412-Al_heeft_Hij_ons_verlaten'                             ],
    ['ZJ_413', '<a href=MP3_Peter/ZJ_413-Dit_is_de_dag.mp3>                                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_413-Dit_is_de_dag'                                         ],
    ['ZJ_414', '<a href=MP3_Peter/ZJ_414-De_Heer_is_waarlijk_opgestaan.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_414-De_Heer_is_waarlijk_opgestaan'                         ],
    ['ZJ_415', '<a href=MP3_Peter/ZJ_415-Looft_God_de_Heer.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_415-Looft_God_de_Heer'                                     ],
    ['ZJ_416', '<a href=MP3_Peter/ZJ_416-Nu_moet_gij_allen_vrolijk_zijn.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_416-Nu_moet_gij_allen_vrolijk_zijn'                        ],
    ['ZJ_418', '<a href=MP3_Peter/ZJ_418-Zingt_voor_de_Heer_van_liefde_en_trouw.mp3>        <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_418-Zingt_voor_de_Heer_van_liefde_en_trouw'                ],
    ['ZJ_419', '<a href=MP3_Peter/ZJ_419-Wat_altijd_is_geweest.mp3>                         <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_419-Wat_altijd_is_geweest'                                 ],
    ['ZJ_420', '<a href=MP3_Peter/ZJ_420-Aan_wat_op_aarde_leeft.mp3>                        <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_420-Aan_wat_op_aarde_leeft'                                ],
    ['ZJ_421', '<a href=MP3_Peter/ZJ_421-Ik_zing_voor_de_Heer.mp3>                          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_421-Ik_zing_voor_de_Heer'                                  ],
    ['ZJ_422', '<a href=MP3_Peter/ZJ_422-Kondigt_het_jubelend_aan.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_422-Kondigt_het_jubelend_aan'                              ],
    ['ZJ_424', '<a href=MP3_Peter/ZJ_424-Lof_zij_God_in_de_hoogste_troon.mp3>               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_424-Lof_zij_God_in_de_hoogste_troon'                       ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter400) {
  const [headings, ...rows] = dataMP3Peter400;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter400));
