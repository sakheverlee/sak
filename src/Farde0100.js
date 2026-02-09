let dataFarde0100 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '0109' ,'<a href=coria/0109_GaMeeMetOns.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Ga mee met ons' ], 
[ '0112' ,'<a href=coria/0112_GloriaSeiDirGesungen.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Gloria sei dir gesungen' ], 
[ '0115' ,'<a href=coria/0115_HerdersHijIsGeboren.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Herders Hij is geboren' ], 
[ '0121' ,'<a href=coria/0121_EerZijGod.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Eer zij God' ], 
[ '0126' ,'<a href=coria/0126_GodLeerdeOnsDeLiefde.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'God leerde ons de liefde ' ], 
[ '0140' ,'<a href=coria/0140_Da_pacem_domine.html><img src="src/quaver.svg"width="20" height="20"></img></a>','','' ,'', 'Da pacem domine ' ],
[ '0156' ,'<a href=coria/0156_ChristmasPeaceCanon.html><img src="src/quaver.svg"width="20" height="20"></img></a>','','' ,'', 'Christmas Peace Canon ' ],
[ '0169' ,'<a href=coria/0169_DonaLaPace.html><img src="src/quaver.svg"width="20" height="20"></img></a>','','' ,'', 'Adoraçao dos pastores' ],
[ '0171' ,'<a href=coria/0171_IkWensJeVredeVanGod.html><img src="src/quaver.svg"width="20" height="20"></img></a>','','' ,'', 'Ik wens je vrede van God' ],
[ '0178' ,'<a href=coria/0178_AdoraçaoDosPastores.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Dona la pace ' ],
[ '0192' ,'<a href=coria/0192_BekommerdOmVrede.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Bekommerd om vrede ' ], 
[ '0195' ,'<a href=coria/0195_HoeVerTeGaan.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Hoe ver te gaan ' ], 
[ '0197' ,'<a href=coria/0197_Alta_Trinità_beata.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Alta Trinità beata ' ], 
[ '0198' ,'<a href=coria/0198_DeSteppe.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'De steppe zal bloeien ' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde0100) {
  const [headings, ...rows] = dataFarde0100;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde0100));
