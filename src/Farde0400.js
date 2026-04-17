let dataFarde0400 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '0402' ,'<a href=coria/0402_WeesHierAanwezig.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Wees hier aanwezig ' ], 
[ '0404' ,'<a href=coria/0404_DatUwWoordenInOnsBranden.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Dat uw woorden in ons branden' ], 
[ '0412' ,'<a href=coria/0412_WaarMensenElkaarDragen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Waar mensen elkaar dragen' ], 
[ '0415' ,'<a href=coria/0415_VredeVoorAlleMensen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Vrede voor alle mensen' ], 
[ '0421' ,'<a href=coria/0421_JijDieBent.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Jij die bent ' ], 
[ '0422' ,'<a href=coria/0422_BlijfNietStaan.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Blijf niet staan' ],   
[ '0424' ,'<a href=coria/0424_AdventIsDromen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Advent is dromen' ],   
[ '0426' ,'<a href=coria/0426_WanneerZalDeMensTochKomen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Wanneer zal de mens toch komen' ],   
[ '0427' ,'<a href=coria/0427_Heer_WeesOnsGenadig.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Heer wees ons genadig ' ], 
[ '0428' ,'<a href=coria/0428_tIsGeboren.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Het Is geboren' ], 
[ '0438' ,'<a href=coria/0438_LiedVanDeSchepping.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Lied van de schepping ' ], 
[ '0463' ,'<a href=coria/0463_40dagen40nachten.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_0463-1_40dagen40nachten.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', '40 dagen 40 nachten' ],
[ '0464' ,'<a href=coria/0464_Litanie_van_alle_heiligen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Litanie van alle heiligen' ], 
[ '0471' ,'<a href=coria/0471_VertelHetAanDeMensen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Vertel het aan de mensen ' ], 
[ '0475' ,'<a href=coria/0475_Maak_mij_een_werktuig.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Maak mij een werktuig ' ], 
[ '0478' ,'<a href=coria/0478_Danklied.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Danklied' ], 
[ '0480' ,'<a href=coria/0480_Kyrie.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_0480-4_Kyrie.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Kyrie' ],
[ '0486' ,'<a href=coria/0486_AlsRegenDieDeAardeDrenkt.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_0486-4_AlsRegenDieDeAardeDrenkt.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Als regen die de aarde drenkt' ],
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde0400) {
  const [headings, ...rows] = dataFarde0400;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde0400));
