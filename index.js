console.log('funguju!');

// Vytvořte si repozitář ze šablony cviceni-minutka pro stránku s kuchyňskou minutkou. Využijte funkci setTimeout ke splnění následujících úkolů.

// 1. Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.
// 2. Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.
// 3. Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
// 4. Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.

console.log('funguju!');

const budik = document.querySelector(".alarm")
const pocetSekund = prompt("Zadejte počet sekund:")
const stop = document.querySelector("#stop")

stop.addEventListener("click", () => {    
    clearTimeout(odpocet)})
const odpocet = setTimeout(() => {    
budik.classList.add("alarm--ring")}, pocetSekund * 1000)