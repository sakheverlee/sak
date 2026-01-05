let dataFarde1900 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '1902' ,'<a href=coria/1902_TheRoadGoesEverOnAndOn.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'The road goes ever on and on' ], 
[ '1906' ,'<a href=coria/1906_Alleluia.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Alleluia' ], 
[ '1907' ,'<a href=coria/1907_AlsHetBroodDatWijDelen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Als het brood dat wij delen ' ], 
[ '1914' ,'<a href=coria/1914_JesusChristYouAreMyLife.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Jesus Christ you are my life' ], 
[ '1917' ,'<a href=coria/1917_AdoramusTe.html><img src="src/quaver.svg"width="20" height="20"></img></a>','','' ,'', 'Adoramus te' ],
[ '1946' ,'<a href=coria/1946_DoopOnsHeer.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Doop ons heer' ], 
[ '1949' ,'<a href=coria/1949_KyriëEleison.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_1949-4_KyriëEleison.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Kyrië eleison' ],
[ '1951' ,'<a href=coria/1951_Heer_verhoor_ons.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Heer verhoor ons' ], 
[ '1954' ,'<a href=coria/1954_GoedeVaderVanAlleVolken.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Goede vader van alle volken ' ], 
[ '1962' ,'<a href=coria/1962_AdventDatIs.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Advent dat is' ], 
[ '1963' ,'<a href=coria/1963_FluisterDanDatJeGelooft.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Fluister dan dat je gelooft' ],
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde1900) {
  const [headings, ...rows] = dataFarde1900;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde1900));
