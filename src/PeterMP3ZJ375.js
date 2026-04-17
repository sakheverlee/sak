let dataMP3Peter375 = [
    ['nummer',  'mp3' , 'titel' ],
    ['ZJ_375', '<a href=MP3_Peter/ZJ_375-Nu_valt_de_nacht.mp3>                              <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_375-Nu_valt_de_nacht'                                      ],
    ['ZJ_376', '<a href=MP3_Peter/ZJ_376-Waarom_ben_ik_verlaten.mp3>                        <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_376-Waarom_ben_ik_verlaten'                                ],
    ['ZJ_377', '<a href=MP3_Peter/ZJ_377-Aan_uw_stam_o_Kruis.mp3>                           <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_377-Aan_uw_stam_o_Kruis'                                   ],
    ['ZJ_378', '<a href=MP3_Peter/ZJ_378-Stil_ligt_de_tuin.mp3>                             <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_378-Stil_ligt_de_tuin'                                     ],
    ['ZJ_379', '<a href=MP3_Peter/ZJ_379-Door_wat_voor_grote_eenzaamheden.mp3>              <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_379-Door_wat_voor_grote_eenzaamheden'                      ],
    ['ZJ_380', '<a href=MP3_Peter/ZJ_380-Toen_Jezus_in_zijn_uur_gekomen_was.mp3>            <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_380-Toen_Jezus_in_zijn_uur_gekomen_was'                    ],
    ['ZJ_381', '<a href=MP3_Peter/ZJ_381-In_stille_nacht.mp3>                               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_381-In_stille_nacht'                                       ],
    ['ZJ_382', '<a href=MP3_Peter/ZJ_382-De_Zoon_die_voor_de_eeuwen.mp3>                    <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_382-De_Zoon_die_voor_de_eeuwen'                            ],
    ['ZJ_383', '<a href=MP3_Peter/ZJ_383-Naast_het_kruis.mp3>                               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_383-Naast_het_kruis'                                       ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter375) {
  const [headings, ...rows] = dataMP3Peter375;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter375));
