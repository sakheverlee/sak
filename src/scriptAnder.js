
let dataAnder = [
    ['nummer',  'coria '                                                                                                    , 'pdf'                                                                                                          , 'web'                                                                                                              , 'mp3'                                                                                      , 'titel'                           ],
    ['100000',  '                                                                                                          ', '<a href=pdf/LocusIste.pdf> <img src="src/Icon_PDF.png"  width="20" height="20"> </a>  '                           , ''                                                                                                                 , '<a href=mp3/LocusIste.mp3> <img src="src/mp3.png"         width="20" height="20"></img> </a>' ,'Locus Iste'                       ]
];


function createTable(dataAnder) {
  const [headings, ...rows] = dataAnder;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(dataAnder));