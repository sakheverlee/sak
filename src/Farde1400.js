let dataFarde1400 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '1424' ,'<a href=coria/1424_GloriaGloria.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Gloria Gloria' ], 
[ '1444' ,'<a href=coria/1444_INeedTheeEveryHour.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'I need thee every hour' ], 
[ '1484' ,'<a href=coria/1484_OpdatUwDroom.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Opdat uw droom' ], 
[ '1485' ,'<a href=coria/1485_KomLuisterNaarMijnWoorden.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Kom Luister naar mijn woorden' ], 
[ '1486' ,'<a href=coria/1486_KomHeerJezus.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Kom Heer Jezus' ], 
[ '1488' ,'<a href=coria/1488_AmbrosiaanseLofzang.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_1488-7_AmbrosiaanseLofzang.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Ambrosiaanse lofzang' ],
[ '1494' ,'<a href=coria/1494_OveralMetJezus.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Overal met Jezus' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde1400) {
  const [headings, ...rows] = dataFarde1400;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde1400));
