let dataFarde1300 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '1319' ,'<a href=coria/1319_HijDieGesprokenHeeft.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_1319-2_HijDieGesprokenHeeft.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Hij die gesproken heeft' ],
[ '1346' ,'<a href=coria/1346_AlsJeIntLeven.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Als je in het leven' ], 
[ '1348' ,'<a href=coria/1348_BronInDeWoestijn.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_1348-2_BronInDeWoestijn.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Bron in de woestijn' ],
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde1300) {
  const [headings, ...rows] = dataFarde1300;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde1300));
