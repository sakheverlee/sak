let dataFarde1000 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '1001' ,'<a href=coria/1001_VoorHetMooie.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Voor het mooie' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde1000) {
  const [headings, ...rows] = dataFarde1000;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde1000));
