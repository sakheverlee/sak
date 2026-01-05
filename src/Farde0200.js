let dataFarde0200 = [
['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
[ '0213' ,'<a href=coria/0213_GaJeAllenMetOnsMee.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Ga je allen met ons mee' ], 
[ '0220' ,'<a href=coria/0220_WaarJeWoontOpDezeWereld.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Waar je woont op deze wereld' ], 
[ '0237' ,'<a href=coria/0237_ZomaarEenDak.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Zomaar een dak' ], 
[ '0244' ,'<a href=coria/0244_WakendUitzien.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Wakend uitzien' ], 
[ '0247' ,'<a href=coria/0247_KindOnsGeboren.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Kind ons geboren' ], 
[ '0260' ,'<a href=coria/0260_DeGeestDesHeren.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'De geest des heren ' ], 
[ '0266' ,'<a href=coria/0266_Here_der_Heren.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Here der Heren' ], 
[ '0272' ,'<a href=coria/0284_JijHebtEenNaam.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Jij hebt een naam' ], 
[ '0284' ,'<a href=coria/0272_IsDroomEenDroom.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Is droom een droom' ], 
[ '0286' ,'<a href=coria/0286_GeprezenZijOnzeGod.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' ','' ,'', 'Geprezen zij onze God ' ], 
[ '0289' ,'<a href=coria/0289_IkZieDeHemelOpengaan.html><img src="src/quaver.svg"width="20" height="20"></img></a>',' <a href=pdf/SAK_0289-4_IkZieDeHemelOpengaan.pdf><img src="src/Icon_PDF.png"width="20" height="20"></a>','' ,'', 'Ik zie de hemel opengaan ' ],
[ '    ' ,'                                                                                                          ',' ','' ,'', '                           ' ] 
];


function createTable(dataFarde0200) {
  const [headings, ...rows] = dataFarde0200;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataFarde0200));
