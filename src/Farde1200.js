let dataFarde1200 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '1256' ,'<a href=coria/1256_GeenHerdersDieWaken.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_1256-4_GeenHerdersDieWaken.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'De herdertjes lagen bij nachte' ],
[ '1271' ,'<a href=coria/1271_HoortMensenbroeders.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_1271-4_HoortMensenbroeders.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Hoort mensenbroeders' ],
[ '1249' ,'<a href=coria/1249_TenHemelOpgestegen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Ten hemel opgestegen' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde1200) {
  const [headings, ...rows] = dataFarde1200;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde1200));
