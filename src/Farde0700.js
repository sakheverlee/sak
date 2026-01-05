let dataFarde0700 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '0704' ,'<a href=coria/0704_LevenInOvervloed.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_0704-4_LevenInOvervloed.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Leven in overvloed ' ],
[ '0710' ,'<a href=coria/0710_BroodOpTafel.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Brood op tafel' ], 
[ '0731' ,'<a href=coria/0731_ZingVoorDeHeer.html><img src="src/quaver.svg"width="20" height="20"></img></a>','<a href=pdf/SAK_0731-3_ZingVoorDeHeer.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Zing voor de Heer' ], 
[ '0736' ,'<a href=coria/0736_AlsTussenLichtEnDonker.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Als tussen licht en donker' ], 
[ '0746' ,'<a href=coria/0746_DoorDeLiefdeLaatUWekken.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Door de liefde laat U wekken' ], 
[ '0769' ,'<a href=coria/0769_KwamVanGodswege.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Kwam van godswege' ], 
[ '0779' ,'<a href=coria/0779_MensenVanOveralAangewaaid.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Mensen van overal aangewaaid' ], 
[ '0792' ,'<a href=coria/0792_Ga_dan_op_weg.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Ga dan op weg' ], 
[ '0793' ,'<a href=coria/0793_STA_OP_VOLK_VAN_GOD.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Sta op volk van god' ], 
[ '0795' ,'<a href=coria/0795_GaNaarDeStraten.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Ga naar de straten ' ], 
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde0700) {
  const [headings, ...rows] = dataFarde0700;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde0700));
