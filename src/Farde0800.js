let dataFarde0800 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '0865' ,'<a href=coria/0865_HebDank.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Heb dank' ], 
[ '0866' ,'<a href=coria/0866_Kyrie.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Kyrie' ], 
[ '0872' ,'<a href=coria/0872_WijSpeurenInHetDuister.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Wij speuren in het duister' ], 
[ '0876' ,'<a href=coria/0876_UwWoordIsEenLamp.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_0876-1_UwWoordIsEenLamp.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Uw woord is een lamp' ],
[ '0877' ,'<a href=coria/0877_ZingNuDitLied.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_0877-2_ZingNuDitLied.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Zing nu dit lied' ],
[ '0884' ,'<a href=coria/0884_Offerandelied.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Offerandelied' ], 
[ '0885' ,'<a href=coria/0885_TebePöem.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Tebe Pöem ' ], 
[ '0886' ,'<a href=coria/0886_SamenOpWegZoekendNaarLiefde.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Samen op weg zoekend naar liefde' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde0800) {
  const [headings, ...rows] = dataFarde0800;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde0800));
