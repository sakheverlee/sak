let dataFarde0600 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '0608' ,'<a href=coria/0608_GezongenGebedsrefrein.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_0608-4_GezongenGebedsrefrein.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Gezongen gebedsrefrein' ],
[ '0609' ,'<a href=coria/0609_Tussenzang_Laten_wij_zijn.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Laten wij zijn als de levende stenen ' ], 
[ '0633' ,'<a href=coria/0633_HeerOntfermUOverOns.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Heer ontferm U over ons' ], 
[ '0690' ,'<a href=coria/0690_VredeVoorIedereen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Vrede voor iedereen' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde0600) {
  const [headings, ...rows] = dataFarde0600;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde0600));
