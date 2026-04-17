let dataFarde1700 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '1702' ,'<a href=coria/1702_AlsInTBrood.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_1702-4_AlsInTBrood.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Als in het brood' ],
[ '1703' ,'<a href=coria/1703_KijkVooruit.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Kijk vooruit ' ], 
[ '1705' ,'<a href=coria/1705_IkZoekEenLand.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Ik zoek een land' ], 
[ '1706' ,'<a href=coria/1706_GEBED_VAN_SINT-FRANCISCUS.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Gebed van Sint-Franciscus' ], 
[ '1710' ,'<a href=coria/1710_MijnToeverlaat.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_1710-4_MijnToeverlaat.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Mijn toeverlaat ' ], 
[ '1775' ,'<a href=coria/1775_TenHemelOpgevaren.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Ten hemel opgevaren' ], 
[ '1799' ,'<a href=coria/1799_Toon_ons_uw_Zoon.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_1799-4_ToonOnsUwZoon.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Toon ons uw Zoon' ],
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde1700) {
  const [headings, ...rows] = dataFarde1700;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde1700));
