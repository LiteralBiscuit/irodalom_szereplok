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

// fej sor létrehozása
/**
 * @type {HTMLTableRowElement} a fej sor
 */
const tableHeaderRow = document.createElement("tr"); // fej sor létrehozása
/**
 * @type {number} index változó
 */
let index = 0; // index változó létrehozása hogy a harmadik elemet meg lehessen határozni
for (const header of tableheaderArray) { // for loop fej sor tartalmának a létrehozásához
    index++; // index növelése
    /**
     * @type {HTMLTableCellElement} th
     */
    const tableHeaderCell = document.createElement("th"); // adott th létrehozása
    tableHeaderCell.innerText = header.title; // adott th szövegének megadása
    tableHeaderRow.appendChild(tableHeaderCell); // th hozzáfűzése a fej sorhoz
    if(index == 3) // csak így jutott eszembe megoldani
        tableHeaderCell.colSpan = 2; // 3. th colspan tulajdonságának beállítása 2-re
}
thead.appendChild(tableHeaderRow); // fej sor hozzáfűzése a fejhez

// törzs tartalom
for (const sor of tableBodyArray) { // for loop a tartalom léterehozásához
    /**
     * @type {HTMLTableRowElement} sor
     */
    const tbodyRow = document.createElement("tr"); // adott sor létrehozása
    tbody.appendChild(tbodyRow); // adott sor hozzáfűzése a tbody-hoz
    /**
     * @type {HTMLTableCellElement} 1. cella
     */
    const elsoTbodyCell = document.createElement("td"); // 1. cella létrehozása
    tbodyRow.appendChild(elsoTbodyCell); // 1. clella hozzáfűzése az adott sorhoz
    elsoTbodyCell.innerText = sor.szerzo; // 1. cella szövegének megadása
    /**
     * @type {HTMLTableCellElement} 2. cella
     */
    const masodikTbodyCell = document.createElement("td"); // 2. cella létrehozása
    tbodyRow.appendChild(masodikTbodyCell); // 2. clella hozzáfűzése az adott sorhoz
    masodikTbodyCell.innerText = sor.mu; // 2. cella szövegének megadása
    /**
     * @type {HTMLTableCellElement} 3. cella
     */
    const harmadikTbodyCell = document.createElement("td"); // 3. cella létrehozása
    tbodyRow.appendChild(harmadikTbodyCell); // 3. clella hozzáfűzése az adott sorhoz
    harmadikTbodyCell.innerText = sor.elsoSzereplo; // 3. cella szövegének megadása
    if (sor.masodikSzereplo){ // ha van 4. sor
        /**
         * @type {HTMLTableCellElement} 4. cella
         */
        const negyedikTbodyCell = document.createElement("td"); // 4. cella létrehozása
        tbodyRow.appendChild(negyedikTbodyCell); // 4. clella hozzáfűzése az adott sorhoz
        negyedikTbodyCell.innerText = sor.masodikSzereplo; // 4. cella szövegének megadása
        continue; // ha van 4. cella akkor nem állítunk colspant hanem visszaugrunk a ciklus elejére
    }
    harmadikTbodyCell.colSpan = 2; // 3. cella colspan beállítása 2-re ha nincs 4. sor
}