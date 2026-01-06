let data20260118 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel'                               ],
    ['1708', '1-3-5',     '<a href=src/missing.html>                           <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Door de wereld gaat een woord' ],
    ['1486', 'alles',     '<a href=coria/1486_KomHeerJezus.html>               <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Kom, Heer Jezus'                       ],
    ['1424', '1-3',       '<a href=coria/1424_GloriaGloria.html>               <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Gloria (Nederlandse tekst)'       ],
    ['0107', '1-2-3',     '<a href=src/missing.html>                           <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Uw boodschap dragen wij' ],
    ['1710', 'alles',     '<a href=coria/1710_MijnToeverlaat.html>             <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Mijn toeverlaat'                    ],
    ['0549', 'alles',     '<a href=coria/0549_LaudateOmnesGentes.html>         <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laudate omnes gentes'       ],
    ['0169', 'alles',     '<a href=coria/0169_DonaLaPace.html>                 <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Dona la pace, Signore'                       ],
    ['1132', '1-2-3',     '<a href=src/missing.html>                           <img src="src/missing.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Als gij naar de woorden luistert'                ],
    ['0300', 'alles',     '<a href=coria/0300_LuisterHeer.html>                <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Luister, Heer, verhoor ons bidden'                ],
    ['0704', '1-2-3',     '<a href=coria/0704_LevenInOvervloed.html>           <img src="src/quaver.svg"  width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Leven in overvloed'              ]
];
          
function createTable(data20260118) {
  const [headings, ...rows] = data20260118;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20260118));

