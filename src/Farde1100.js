let dataFarde1100 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '1105' ,'<a href=coria/1105_SchepperVanHetLeven.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Schepper van het leven' ], 
[ '1107' ,'<a href=coria/1107_GodZalURedden.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'God zal u redden' ], 
[ '1147' ,'<a href=coria/1147_EerAanGod.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Eer aan God' ], 
[ '1153' ,'<a href=coria/1153_LAUDATE_DOMINUM.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Laudate Dominum ' ], 
[ '1182' ,'<a href=coria/1182_HetLiedVanDeKaarsen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Het lied van de kaarsen' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde1100) {
  const [headings, ...rows] = dataFarde1100;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde1100));
