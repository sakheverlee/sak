let dataFarde1500 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '1502' ,'<a href=coria/1502_LaatZoJeLichtMaarSchijnen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Laat zo je licht maar schijnen' ], 
[ '1507' ,'<a href=coria/1507_Heilig.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Heilig ' ], 
[ '1511' ,'<a href=coria/1511_HeerWeesMijnKracht.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_1511-4_HeerWeesMijnKracht_inD.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Heer wees mijn kracht ' ],
[ '1577' ,'<a href=coria/1577_EffenDeWeg.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Effen de weg' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde1500) {
  const [headings, ...rows] = dataFarde1500;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde1500));
