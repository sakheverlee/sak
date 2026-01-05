let dataFarde1600 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '1602' ,'<a href=coria/1602_Wees_niet_bevreesd.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Wees niet bevreesd ' ], 
[ '1606' ,'<a href=coria/1606_God_met_mij_op_alle_wegen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'God met mij op alle wegen' ], 
[ '1609' ,'<a href=coria/1609_Dank_U_Heer.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Dank u heer' ], 
[ '1610' ,'<a href=coria/1610_lofgezongen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'lofgezongen' ], 
[ '1612' ,'<a href=coria/1612_Vrede_van_God.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Vrede van God' ], 
[ '1643' ,'<a href=coria/1643_Halleluja_GodSchenktOns.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_1643-5_Halleluja_GodSchenktOnsDeToekomst.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Halleluja God schenkt ons' ],
[ '1653' ,'<a href=coria/1653_AlleluiaBereidDeWegDesHeren.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Alleluia Bereid de weg des Heren' ], 
[ '1655' ,'<a href=coria/1655_Het_lied_van_samen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Het lied van samen ' ], 
[ '1658' ,'<a href=coria/1658_HoorDeHerders.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Hoor de herders ' ], 
[ '1660' ,'<a href=coria/1660_Kerstzegen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Kerstzegen' ], 
[ '1670', ' ', ' ' , '<a href=https://www.youtube.com/watch?v=Kkz_14GR_D8> <img src="src/world-wide-web.png" width="20" height="20"> </a>', '' , 'Jezus diep in de woestijn'       ],
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde1600) {
  const [headings, ...rows] = dataFarde1600;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde1600));
