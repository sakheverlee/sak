let data20250928 = [
    ['nummer', 'strofen',       'coria ',                                                                                          'pdf' , 'web' , 'mp3' , 'titel' ],
    ['1876', '1-2-3',   '<a href=coria/>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Worden we vrij'                       ],
    ['0035', 'alles',   '<a href=coria/>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Kwaad en zorgen'                      ],
    ['0587', '1-2-3',   '<a href=coria/>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Eer aan God in den hoge'              ],
    ['0396', '1-2-3-4', '<a href=coria/>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Wij kunnen de ogen niet sluiten'      ],
    ['0609', 'alles',   '<a href=coria/>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Laten we zijn als de levende stenen'  ],
    ['1507', 'alles',   '<a href=coria/>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Driemaal heilig'                      ],
    ['1612', '1',       '<a href=coria/>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Vrede van God'                        ],
    ['1735', '1-2-3',   '<a href=coria/>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'De hemel is voor iedereen'            ],
    ['1484', 'alles',   '<a href=coria/>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Opdat uw droom'                       ],
    ['1944', '1-2',     '<a href=coria/>  <img src="src/quaver.svg" width="20" height="20"></img> </a>',  ' ', ' ' , '' , 'Wat zou de wereld anders zijn'        ]
];
          
function createTable(data20250928) {
  const [headings, ...rows] = data20250928;
      
    return `
          <table>
            <thead>${getCells(headings, 'th')}</thead>
            <tbody>${rows.map(getRow).join('')}</tbody>
          </table>
    `;
}

document.body.insertAdjacentHTML('beforeend', createTable(data20250928));
