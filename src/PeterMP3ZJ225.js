let dataMP3Peter225 = [
    ['nummer',  'mp3' , 'titel' ],

    ['ZJ_225', '<a href=MP3_Peter/ZJ_225-In_den_beginne_was_het_woord.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_225-In_den_beginne_was_het_woord'                          ],
    ['ZJ_227', '<a href=MP3_Peter/ZJ_227-In_den_beginne_was_het_woord.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_227-In_den_beginne_was_het_woord'                          ],
    ['ZJ_228', '<a href=MP3_Peter/ZJ_228-Als_een_ster_in_lichte_luister.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_228-Als_een_ster_in_lichte_luister'                        ],
    ['ZJ_229', '<a href=MP3_Peter/ZJ_229-Door_het_donker_hier_gekomen.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_229-Door_het_donker_hier_gekomen'                          ],
    ['ZJ_230', '<a href=MP3_Peter/ZJ_230-Gezegend_Woord.mp3>                                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_230-Gezegend_Woord'                                        ],
    ['ZJ_231', '<a href=MP3_Peter/ZJ_231-Een_diepe_nacht.mp3>                               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_231-Een_diepe_nacht'                                       ],
    ['ZJ_232', '<a href=MP3_Peter/ZJ_232-Van_her_van_oudsher_aangereikt.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_232-Van_her_van_oudsher_aangereikt'                        ],
    ['ZJ_233', '<a href=MP3_Peter/ZJ_233-Gods_woord_van_het_begin.mp3>                      <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_233-Gods_woord_van_het_begin'                              ],
    ['ZJ_234', '<a href=MP3_Peter/ZJ_234-Toon_ons_uw_Zoon.mp3>                              <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_234-Toon_ons_uw_Zoon'                                      ],
    ['ZJ_235', '<a href=MP3_Peter/ZJ_235-Heeft_Hij_ons_bidden_opgevangen.mp3>               <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_235-Heeft_Hij_ons_bidden_opgevangen'                       ],
    ['ZJ_236', '<a href=MP3_Peter/ZJ_236-Hoe_helder_staat_de_morgenster.mp3>                <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_236-Hoe_helder_staat_de_morgenster'                        ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter225) {
  const [headings, ...rows] = dataMP3Peter225;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter225));
