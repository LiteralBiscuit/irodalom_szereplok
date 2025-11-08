// rájöttem hogy a 'fejléc' szót több dologra is érttettem eddig, innentől inkább nem használom
// ezért nem szabad magyarul programoznom mert abból elcseszett hunglish lessz
/**
 * @type {string} valtozo ami tartalmazza a weblap címét
 */
const title = 'irodalom szereplok'; // cím tárolása egy vátozóban
/**
 * @type {{title: string}[]} fej sor objektum array
 */
const tableheaderArray = [ // fej sor objektum array létrehozása
    { title: 'Szerző' }, // fej sor 1. elemének tárolása egy objektumban
    { title: 'Mű' }, // fej sor 2. elemének tárolása egy objektumban
    { title: 'Szereplők' } // fej sor 3. elemének tárolása egy objektumban
]
/**
 * @type {{ szerzo: string, mu: string, elsoSzereplo: string, masodikSzereplo?: string}[]}
 */
const tableBodyArray = [ // táblázat törzs array létrehozása
    { // 1. sor objektum létrehozása
    szerzo: 'Katona József', // szerző megadása
    mu: 'Bánk Bán', // mű megadása
    elsoSzereplo: 'Gertrúdisz Királyné' // szereplő megadása
    },
    { // 2. sor objektum létrehozása
    szerzo: 'Mikszáth Kálmán', // szerző megadása
    mu: 'Beszterce ostroma', // mű megadása
    elsoSzereplo: 'Pongrác István gróf', // első szereplő megadása
    masodikSzereplo: 'Estella' // második szereplő megadása
    },
    { // 3. sor objektum létrehozása
    szerzo: 'Arany János', // szerző megadása
    mu: 'Toldi', // mű megadása
    elsoSzereplo: 'Toldi Miklós' // szereplő megadása
    }
]


//táblázat
//táblázatelemek létrehozása
/**
 * @type {HTMLTableElement} a táblázat
 */
const table = document.createElement("table"); // a táblázat létrehozása és tárolása egy vátozóban
document.body.appendChild(table); // táblázat hozzáfűzése a body-hoz
/**
 * @type {HTMLTableSectionElement} a fej
 */
const thead = document.createElement("thead"); // a fej létrehozása és tárolása egy vátozóban
table.append(thead); // fej hozzáfűzése a táblázathoz
/**
 * @type {HTMLTableSectionElement} a táblázat törzse
 */
const tbody = document.createElement("tbody"); // a táblázat törzsének létrehozása és tárolása egy vátozóban
table.appendChild(tbody); // törzs hozzáfűzése a táblázathoz

/**
 * @type {HTMLTableRowElement} a fej sor
 */
const tableHeaderRow = document.createElement("tr"); // fej sor létrehozása
/**
 * @type {number} index változó
 */
let index = 0; // index változó létrehozása hogy a harmadik elemet meg lehessen határozni
for (const header of tableheaderArray) { // for loop a fej sor tartalmának a létrehozásához
    index++; // index növelése
    if(index == 3) // ha a 3. cella (csak így jutott eszembe megoldani)
        createCell("th", header.title, tableHeaderRow, 2); // 3. cella létrehozása colSpan = 2 -vel
    else // ha nem a 3. cella
        createCell("th", header.title, tableHeaderRow); // adott cella létrehozása
}
thead.appendChild(tableHeaderRow); // fej sor hozzáfűzése a fejhez

// törzs tartalom
for (const sor of tableBodyArray) { // for loop a tartalom léterehozásához
    /**
     * @type {HTMLTableRowElement} sor
     */
    const tbodyRow = document.createElement("tr"); // sor létrehozása
    tbody.appendChild(tbodyRow); // sor hozzáfűzése a táblázathoz
    if (sor.masodikSzereplo){ // ha van 4. cella
        createCell("td", sor.szerzo, tbodyRow); // 1. cella létrehozása
        createCell("td", sor.mu, tbodyRow); // 2. cella létrehozása
        createCell("td", sor.elsoSzereplo, tbodyRow); // 3. cella létrehozása
        createCell("td", sor.masodikSzereplo, tbodyRow); // 4. cella létrehozása
    }
    else{ // ha nincs 4. cella
        createCell("td", sor.szerzo, tbodyRow); // 1. cella létrehozása
        createCell("td", sor.mu, tbodyRow); // 2. cella létrehozása
        createCell("td", sor.elsoSzereplo, tbodyRow, 2); // 3. cella létrehozása colSpan = 2 -vel
    }
}

/**
 * 
 * @param {string} cellType th vagy td 
 * @param {string} cellContent a cella tartalma
 * @param {HTMLTableRowElement} parentRow a sor ahova bemegy a csinált cella 
 * @param {number} colspan a cella colspanja alapesetben 1
 * @returns {void} nem tér vissza a megcsinált cellával
 */
function createCell (cellType, cellContent, parentRow, colspan = 1){ // cellát létrehozó függvény
    /**
     * @type {HTMLTableCellElement} a létrehozandó cella
     */
    const cell = document.createElement(cellType); // cella létrehozása
    cell.innerText = cellContent; // cella tartalmának beállítása
    cell.colSpan = colspan; // colspan beállítása
    parentRow.appendChild(cell); // cella hozzáadása a szülősorhoz
}
// őszinte vélemény: ilyet kérem soha többet tanár úr! minden sorba komment az nagyon extrém és erősen az öngyilkosságra ösztönöz