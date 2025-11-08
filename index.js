// az előző commitot szerintem nem úgy kellet volna ahogy csináltam de remélem elfogadható
// észrevettem hogy a html kódban a divet nem kellet volna lemásolnom, hoppá
//változók bevezetése
/**
 * @type {string} valtozo ami tartalmazza a cimet
 */
const title = 'irodalom szereplok'; // cím tárolása egy vátozóban
/**
 * @type {string} valtozo ami tartalmazza a fejléc 1. elemét
 */
const tableheaderElso = 'Szerző'; // fejléc 1. elemének tárolása egy vátozóban
/**
 * @type {string} valtozo ami tartalmazza a fejléc 2. elmét
 */
const tableheaderMasodik = 'Mű'; // fejléc 2. elemének tárolása egy vátozóban
/**
 * @type {string} valtozo ami tartalmazza a fejléc 3. elemét
 */
const tableheaderHarmadik = 'Szereplők'; // fejléc 3. elemének tárolása egy vátozóban
/**
 * @type {string} 1. sor 1. eleme
 */
const elsoSorElso = 'Katona József'; // 1. sor 1. elemének tárolása egy vátozóban
/**
 * @type {string} 1. sor 2. eleme
 */
const elsoSorMasodik = 'Bánk Bán'; // 1. sor 2. elemének tárolása egy vátozóban
/**
 * @type {string} 1. sor 3. eleme
 */
const elsoSorHarmadik = 'Gertrúdisz Királyné'; // 1. sor 3. elemének tárolása egy vátozóban
/**
 * @type {string} 2. sor 1. eleme
 */
const masodikSorElso = 'Mikszáth Kálmán'; // 2. sor 1. elemének tárolása egy vátozóban
/**
 * @type {string} 2. sor 2. eleme
 */
const masodikSorMasodik = 'Beszterce ostroma'; // 2. sor 2. elemének tárolása egy vátozóban
/**
 * @type {string} 2. sor 3. eleme
 */
const masodikSorHarmadik = 'Pongrác István gróf'; // 2. sor 3. elemének tárolása egy vátozóban
/**
 * @type {string} 2. sor 4. eleme
 */
const masodikSorNegyedik = 'Estella'; // 2. sor 4. elemének tárolása egy vátozóban
/**
 * @type {string} 3. sor 1. eleme
 */
const harmadikSorElso = 'Arany János'; // 3. sor 1. elemének tárolása egy vátozóban
/**
 * @type {string} 3. sor 2. eleme
 */
const harmadikSorMasodik = 'Toldi'; // 3. sor 2. elemének tárolása egy vátozóban
/**
 * @type {string} 3. sor 3. eleme
 */
const harmadikSorHarmadik = 'Toldi Miklós'; // 3. sor 3. elemének tárolása egy vátozóban



//táblázat
//táblázatelemek létrehozása
/**
 * @type {HTMLTableElement} a táblázat
 */
const table = document.createElement("table"); // a táblázat létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableSectionElement} a fejléc
 */
const thead = document.createElement("thead"); // a fejléc létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableSectionElement} a táblázat törzse
 */
const tbody = document.createElement("tbody"); // a táblázat törzsének létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableRowElement} a fejléc tr-je
 */
const fejlec = document.createElement("tr"); // a fejléc tr-jének létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableRowElement} 1. sor
 */
const elsoSor = document.createElement("tr"); // 1. sor létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableRowElement} 2.sor
 */
const masodikSor = document.createElement("tr"); // 2 sor létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableRowElement} 3. sor
 */
const harmadikSor = document.createElement("tr"); // 3. sor létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 1. header
 */
const fejlecElsoCella = document.createElement("th"); // 1. header létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 2. header
 */
const fejlecMasodikCella = document.createElement("th"); // 2. header létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 3. header
 */
const fejlecHarmadikCella = document.createElement("th"); // 3. header létrehozása és tárolása egy vátozóban
fejlecHarmadikCella.colSpan = 2; // 3. header colspan tulajdonságának a módosítása 2-re
/**
 * @type {HTMLTableCellElement} 1. sor 1. cellája
 */
const elsoSorElsoCella = document.createElement("td"); // 1. sor 1. cellájának létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 1. sor 2. cellája
 */
const elsoSorMasodikCella = document.createElement("td"); // 1. sor 2. cellájának létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 1. sor 3. cellája
 */
const elsoSorHarmadikCella = document.createElement("td"); // 1. sor 3. cellájának létrehozása és tárolása egy vátozóban
elsoSorHarmadikCella.colSpan = 2; // 1. sor 3. cellájának a colspan tulajdonságának a módosítása 2-re
/**
 * @type {HTMLTableCellElement} 2. sor 1. cellája
 */
const masodikSorElsoCella = document.createElement("td"); // 2. sor 1. cellájának létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 2. sor 2. cellája
 */
const masodikSorMasodikCella = document.createElement("td"); // 2. sor 2. cellájának létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 2. sor 3. cellája
 */
const masodikSorHarmadikCella = document.createElement("td"); // 2. sor 2. cellájának létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 2. sor 4. cellája
 */
const masodikSorNegyedikCella = document.createElement("td"); // 2. sor 4. cellájának létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 3. sor 1. cellája
 */
const harmadikSorElsoCella = document.createElement("td"); // 3. sor 1. cellájának létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 3. sor 2. cellája
 */
const harmadikSorMasodikCella = document.createElement("td"); // 3. sor 2. cellájának létrehozása és tárolása egy vátozóban
/**
 * @type {HTMLTableCellElement} 3. sor 3. cellája
 */
const harmadikSorHarmadikCella = document.createElement("td"); // 1. sor 1. cellájának létrehozása és tárolása egy vátozóban
harmadikSorHarmadikCella.colSpan = 2; // 3. sor 3. cellájának a colspan tulajdonságának a módosítása 2-re

// táblázatelemek összefűzése
// fő elemek
table.appendChild(thead); // thead hozzáfűzése a táblázathoz
table.appendChild(tbody); // tbody hozzáfűzése a táblázathoz
// sorok
thead.appendChild(fejlec); // fejléc hozzáfűzése a thead-hez
tbody.appendChild(elsoSor); // 1. sor hozzáfűzése a tbody-hoz
tbody.appendChild(masodikSor); // 2. sor hozzáfűzése a tbody-hoz
tbody.appendChild(harmadikSor); // 3. sor hozzáfűzése a tbody-hoz
// cellák
// thead
fejlec.appendChild(fejlecElsoCella); // fejléc 1. cállájának hozzáfűzése a fejléchez
fejlec.appendChild(fejlecMasodikCella); // fejléc 2. cállájának hozzáfűzése a fejléchez
fejlec.appendChild(fejlecHarmadikCella); // fejléc 3. cállájának hozzáfűzése a fejléchez
// 1. sor
elsoSor.appendChild(elsoSorElsoCella); // 1. sor 1. cellájának hozzáfűzése az 1. sorhoz
elsoSor.appendChild(elsoSorMasodikCella); // 1. sor 2. cellájának hozzáfűzése az 1. sorhoz
elsoSor.appendChild(elsoSorHarmadikCella); // 1. sor 2. cellájának hozzáfűzése az 1. sorhoz
// 2. sor
masodikSor.appendChild(masodikSorElsoCella); // 2. sor 1. cellájának hozzáfűzése az 2. sorhoz
masodikSor.appendChild(masodikSorMasodikCella); // 2. sor 2. cellájának hozzáfűzése az 2. sorhoz
masodikSor.appendChild(masodikSorHarmadikCella); // 2. sor 3. cellájának hozzáfűzése az 2. sorhoz
masodikSor.appendChild(masodikSorNegyedikCella); // 2. sor 4. cellájának hozzáfűzése az 2. sorhoz
// 3. sor
harmadikSor.appendChild(harmadikSorElsoCella); // 3. sor 1. cellájának hozzáfűzése az 3. sorhoz
harmadikSor.appendChild(harmadikSorMasodikCella); // 3. sor 2. cellájának hozzáfűzése az 3. sorhoz
harmadikSor.appendChild(harmadikSorHarmadikCella); // 3. sor 3. cellájának hozzáfűzése az 3. sorhoz
// táblázat
document.body.appendChild(table); // kész táblázat hozzáfűzése a body-hoz

// szövegértékek megadása
// fejléc
fejlecElsoCella.innerText = tableheaderElso; // fejléc 1. cellájának szövegértékének megadása
fejlecMasodikCella.innerText = tableheaderMasodik; // fejléc 2. cellájának szövegértékének megadása
fejlecHarmadikCella.innerText = tableheaderHarmadik; // fejléc 3. cellájának szövegértékének megadása
// 1. sor
elsoSorElsoCella.innerText = elsoSorElso; // 1. sor 1. cellájának szövegértékének megadása
elsoSorMasodikCella.innerText = elsoSorMasodik; // 1. sor 2. cellájának szövegértékének megadása
elsoSorHarmadikCella.innerText = elsoSorHarmadik; // 1. sor 2. cellájának szövegértékének megadása
// 2. sor
masodikSorElsoCella.innerText = masodikSorElso; // 2. sor 1. cellájának szövegértékének megadása
masodikSorMasodikCella.innerText = masodikSorMasodik; // 2. sor 2. cellájának szövegértékének megadása
masodikSorHarmadikCella.innerText = masodikSorHarmadik; // 2. sor 3. cellájának szövegértékének megadása
masodikSorNegyedikCella.innerText = masodikSorNegyedik; // 2. sor 4. cellájának szövegértékének megadása
//3. sor
harmadikSorElsoCella.innerText = harmadikSorElso; // 3. sor 1. cellájának szövegértékének megadása
harmadikSorMasodikCella.innerText = harmadikSorMasodik; // 3. sor 2. cellájának szövegértékének megadása
harmadikSorHarmadikCella.innerText = harmadikSorHarmadik; // 3. sor 3. cellájának szövegértékének megadása