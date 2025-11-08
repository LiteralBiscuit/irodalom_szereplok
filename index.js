// az előző commitot szerintem nem úgy kellet volna ahogy csináltam de remélem elfogadható
// észrevettem hogy a html kódban a divet nem kellet volna lemásolnom, hoppá
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

console.log(title); // kiiratom konzolra a weboldal nevet
console.log(tableheaderElso + " " + tableheaderMasodik + " " + tableheaderHarmadik); // kiiratom konzolra a tablazat fejlecet
console.log(elsoSorElso + " " + elsoSorMasodik + " " + elsoSorHarmadik); // kiiratom konzolra a tablazat elso sorat
console.log(masodikSorElso + " " + masodikSorMasodik + " " + masodikSorHarmadik + " " + masodikSorNegyedik); // kiiratom konzolra a tablazat masodik sorat 
console.log(harmadikSorElso + " " + harmadikSorMasodik + " " + harmadikSorHarmadik); // kiiratom konzolra a harmadik sorat 
// remélem ez így jó