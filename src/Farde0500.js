let dataFarde0500 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '0502' ,'<a href=coria/0502_AlWieDolendInHetDonker.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Al wie dolend in het donker ' ], 
[ '0503' ,'<a href=coria/0503-B_LaatMijNietLos.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Laat mij niet los' ], 
[ '0506' ,'<a href=coria/0506_TheFirstNowel.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'The first nowell' ], 
[ '0513' ,'<a href=coria/0513_Broeders.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Broeders' ], 
[ '0515' ,'<a href=coria/0515_Bekering.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Bekering' ], 
[ '0518' ,'<a href=coria/0518_HetLiedOpDoodEnLeven.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_0518-4_HetLiedOpDoodEnLeven.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Het lied op dood en leven' ],
[ '0537' ,'<a href=coria/0537_Heilig.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_0537-4_Heilig.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Heilig ' ],
[ '0539' ,'<a href=coria/0539_Heilig.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Heilig ' ],
[ '0540' ,'<a href=coria/0540_GebedOmVergeving.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Gebed om vergeving ' ], 
[ '0541' ,'<a href=coria/0541_AdesteFideles.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Adeste fideles' ], 
[ '0544' ,'<a href=coria/0544_AveMaria.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Ave Maria ' ], 
[ '0549' ,'<a href=coria/0549_LaudateOmnesGentes.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_0549-4_LaudateOmnesGentes.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Laudate omnes gentes' ],
[ '0551' ,'<a href=coria/0551_GIJ_DIE_VOOR_ALLE_MENSEN.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Gij die voor alle mensen ' ], 
[ '0560' ,'<a href=coria/0560_AlHeeftHijOnsVerlaten.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Al heeft Hij ons verlaten (ZJ 412) ' ], 
[ '0587' ,'<a href=coria/0587_EerAanGodInDenHoge.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_0587-4_EerAanGodInDenHoge.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Eer aan God in den hoge' ],
[ '0589' ,'<a href=coria/0589_GloryBeToGodTheFather.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Glory be to God the father' ], 
[ '0598' ,'<a href=coria/0598_HetLiedVanHetWater.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_0598-4_HetLiedVanHetWater.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Het lied van het water' ],
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde0500) {
  const [headings, ...rows] = dataFarde0500;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde0500));
