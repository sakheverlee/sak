let dataFarde0900 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '0916' ,'<a href=coria/0916_GeproefdGeleefdHerkend.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Geproefd, geleefd, herkend ' ], 
[ '0917' ,'<a href=coria/0917_OldIrishBlessing.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Old Irish blessing ' ], 
[ '0988' ,'<a href=coria/0988_Sint_Antonius_van_Padua.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Sint Antonius van Padua' ], 
[ '0991' ,'<a href=coria/0991_GijDieVerrezenZijt.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Gij die verrezen zijt ' ], 
[ '0992' ,'<a href=coria/0992_OnEcritSurLesMurs.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'On écrit sur les murs ' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde0900) {
  const [headings, ...rows] = dataFarde0900;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde0900));
