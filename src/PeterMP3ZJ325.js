let dataMP3Peter325 = [
    ['nummer',  'mp3' , 'titel' ],
    ['ZJ_325', '<a href=MP3_Peter/ZJ_325-Die_in_de_hoogte_woont.mp3>                        <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_325-Die_in_de_hoogte_woont'                                ],
    ['ZJ_326', '<a href=MP3_Peter/ZJ_326-Het_volg_van_de_Heer.mp3>                          <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_326-Het_volg_van_de_Heer'                                  ],
    ['ZJ_327', '<a href=MP3_Peter/ZJ_327-Alles_wat_over_ons_geschreven_is.mp3>              <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_327-Alles_wat_over_ons_geschreven_is'                      ],
    ['ZJ_328', '<a href=MP3_Peter/ZJ_328-Broeders_die_op_uittocht_gaan.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_328-Broeders_die_op_uittocht_gaan'                         ],
    ['ZJ_329', '<a href=MP3_Peter/ZJ_329-Wij_zoeken_hier_uw_aangezicht.mp3>                 <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_329-Wij_zoeken_hier_uw_aangezicht'                         ],
    ['ZJ_330', '<a href=MP3_Peter/ZJ_330-Johannes_doopt_in_de_Jordaan.mp3>                  <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_330-Johannes_doopt_in_de_Jordaan'                          ],
    ['ZJ_331', '<a href=MP3_Peter/ZJ_331-Jezus_diep_in_de_woestijn.mp3>                     <img src="src/mp3.png" width="20" height="20"> </a>','ZJ_331-Jezus_diep_in_de_woestijn'                             ],
    [' ',  ' ' , ' ' ]
];

function createTable(dataMP3Peter325) {
  const [headings, ...rows] = dataMP3Peter325;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataMP3Peter325));
