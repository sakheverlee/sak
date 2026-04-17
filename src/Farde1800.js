let dataFarde1800 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '1801' ,'<a href=coria/1801_Gelukkig.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_1801-4_Gelukkig.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Gelukkig' ],
[ '1802' ,'<a href=coria/1802_ElHimnoDeLaPaz(Chili).html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'El himno de la paz (Chili)' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde1800) {
  const [headings, ...rows] = dataFarde1800;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde1800));
