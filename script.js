const texter = {
    sv: {
        språkRubrik: "Språk",
        allergierRubrik: "Allergier",
        gluten: "Gluten",
        laktos: "Laktos",
        ägg: "Ägg",
        köttSortRubrik: "Köttsorter",
        vegetarisk: "Vegetarisk",
        nöt: "Nöt",
        fläsk: "Fläsk",
        fisk: "Fisk",
        kyckling: "Kyckling",
        skaldjur: "Skaldjur",
        sortera: "Sortera",
        standard: "Standard",
        pris: "Pris",
        ordningRubrik: "Ordning",
        fallande: "Fallande",
        stigande: "Stigande",
        rätterRubrik: "Rätter",
        varukorgRubrik: "Varukorg",
        tömKnapp: "Töm",
        tomVarukorg: "Din varukorg är tom",
        totalt: "TOTALT",
        menyRubrik: "Vår meny",
        english: "English",
        svenska: "Svenska",
        luckyDuckRubrik:"Restaurang Lucky Duck",
        sedanText:"Sedan 2026"
    },
    en: {
        språkRubrik: "Language",
        allergierRubrik: "Allergies",
        gluten: "Gluten",
        laktos: "Lactose",
        ägg: "Egg",
        köttSortRubrik: "Meat types",
        vegetarisk: "Vegetarian",
        nöt: "Beef",
        fläsk: "Pork",
        fisk: "Fish",
        kyckling: "Chicken",
        skaldjur: "Seafood",
        sortera: "Sort by",
        standard: "Standard",
        pris: "Price",
        ordningRubrik: "Order",
        fallande: "Descending",
        stigande: "Ascending",
        rätterRubrik: "Dishes",
        varukorgRubrik: "Cart",
        tömKnapp: "Clear",
        tomVarukorg: "Your cart is empty",
        totalt: "TOTAL",
        menyRubrik: "Our menu",
        english: "English",
        svenska: "Swedish",
        luckyDuckRubrik:"Restaurant Lucky Duck",
        sedanText:"Since 2026"

    }
}

const allergiÖversättning = {
    sv: { 
        lactose: "laktos",
        egg: "ägg",
        gluten: "gluten",
        fish: "fisk",
        shellfish:"skaldjur" 
    },
    en: {
        lactose: "lactose",
        egg: "egg",
        gluten:"gluten",
        fish: "fish",
        shellfish: "shellfish" 
    }
}

// Skitmycket
const vårMenyText = document.querySelector("#vårMenyText");
const filterLangTitle = document.querySelector("#filterlangtitle");
const englishLabel = document.querySelector("#englishLabel");
const swedishLabel = document.querySelector("#swedishLabel");
const allergiesText = document.querySelector("#allergiesText");
const glutenLabel = document.querySelector("#glutenLabel");
const laktosLabel = document.querySelector("#laktosLabel");
const äggLabel = document.querySelector("#äggLabel");
const köttSorterText = document.querySelector("#köttSorterText");
const vegetariskLabel = document.querySelector("#vegetariskLabel");
const nötLabel = document.querySelector("#nötLabel");
const fläskLabel = document.querySelector("#fläskLabel");
const fiskLabel = document.querySelector("#fiskLabel");
const kycklingLabel = document.querySelector("#kycklingLabel");
const skaldjurLabel = document.querySelector("#skaldjurLabel");
const sorteraLabel = document.querySelector("#sorteraLabel");
const standardOptionLabel = document.querySelector("#standardOptionLabel");
const prisOptionLabel = document.querySelector("#prisOptionLabel");
const ordningText = document.querySelector("#ordningText");
const fallandeLabel = document.querySelector("#fallandeLabel");
const stigandeLabel = document.querySelector("#stigandeLabel");
const rätterLabel = document.querySelector("#rätterLabel");
const varukorgText = document.querySelector("#varukorgText");
const tomVarukorgText = document.querySelector("#tomVarukorgText");
const totaltLabel = document.querySelector("#totaltLabel");
const luckyDuckRubrikText = document.querySelector("#luckyDuckRubrikText");
const sedanText = document.querySelector("#sedanText");



// Slutet av skitmycket

const rätterLista = document.querySelector(".rätter");
const radioButtonEngelska = document.querySelector("#engelskaKnapp");
const radioButtonSvenska = document.querySelector("#svenskaKnapp");
const radioButtonFallande = document.querySelector("#fallandeRadio");
const radioButtonStigande = document.querySelector("#stigandeRadio");
const orderSelect = document.querySelector("#order");

const glutenCheck = document.querySelector("#gluten");
const laktosCheck = document.querySelector("#laktos");
const äggCheck = document.querySelector("#ägg");

const vegetariskCheck = document.querySelector("#vegetarisk");
const nötCheck = document.querySelector("#nötkött");
const fläskCheck = document.querySelector("#fläsk");
const fiskCheck = document.querySelector("#fisk");
const kycklingCheck = document.querySelector("#kyckling");
const skaldjurCheck = document.querySelector("#skaldjur");

const varukorgLista = document.querySelector(".varukorgLista");

const totalKostnadVarukorgTagg = document.querySelector("#totalKostnad");

const antalIVarukorgText = document.querySelector("#antalIVarukorg");

const tömVarukorgKnapp = document.querySelector("#tömVarukorgKnapp");

let totaltVarukorgPris = 0;

let varukorgVarorValda = [];

let dataMenu;
let originalData = [];

let språk = "sv";
radioButtonSvenska.checked = true;
let sortering = "standard";



tömVarukorgKnapp.addEventListener("click", function(){
    tömVarukorg();
})

vegetariskCheck.addEventListener("click", function(){
    läsInRätter();
})

nötCheck.addEventListener("click", function(){
    läsInRätter();
})

fläskCheck.addEventListener("click", function(){
    läsInRätter();
})

fiskCheck.addEventListener("click", function(){
    läsInRätter();
})

kycklingCheck.addEventListener("click", function(){
    läsInRätter();
})

skaldjurCheck.addEventListener("click", function(){
    läsInRätter();
})

radioButtonEngelska.addEventListener("click", function(){
    språk = "en";
    tomVarukorgText.textContent = "Your cart is empty";
    läsInRätter();
    ändraSpråk()
    tömVarukorg();
})

radioButtonSvenska.addEventListener("click", function(){
    språk = "sv";
    tomVarukorgText.textContent = "Din varukorg är tom";
    läsInRätter();
    ändraSpråk()
    tömVarukorg();
})

radioButtonFallande.addEventListener("click", function(){
    läsInRätter();
})

radioButtonStigande.addEventListener("click", function(){
    läsInRätter();
})

glutenCheck.addEventListener("click", function(){
    läsInRätter();
})

laktosCheck.addEventListener("click", function(){
    läsInRätter();
})

äggCheck.addEventListener("click", function(){
    läsInRätter();
})

orderSelect.addEventListener("click", function(){
    läsInRätter();
})



fetch('menu.json').then(response => response.json()).then(data => {
        dataMenu = data;
        originalData = [...data];
        läsInRätter();
        ändraSpråk()
})

function tömVarukorg(){
    varukorgVarorValda = [];
    varukorgLista.innerHTML = "";

    if (språk == "sv"){
        antalIVarukorgText.innerText = "0st";
        varukorgLista.innerHTML += `<p>Din varukorg är tom</p>`;
    }

    else if(språk == "en"){
        antalIVarukorgText.innerText = "0pcs";
        varukorgLista.innerHTML += `<p>Your cart is empty</p>`;
    }
    
    räknaTotalen();
}

function ändraSpråk(){
    const språkTexter = texter[språk]
    
    vårMenyText.textContent = språkTexter.menyRubrik;
    filterLangTitle.textContent = språkTexter.språkRubrik;
    englishLabel.textContent = språkTexter.english;
    swedishLabel.textContent = språkTexter.svenska;
    allergiesText.textContent = språkTexter.allergierRubrik;
    glutenLabel.textContent = språkTexter.gluten;
    laktosLabel.textContent = språkTexter.laktos;
    äggLabel.textContent = språkTexter.ägg;
    köttSorterText.textContent = språkTexter.köttSortRubrik;
    vegetariskLabel.textContent = språkTexter.vegetarisk;
    nötLabel.textContent = språkTexter.nöt;
    fläskLabel.textContent = språkTexter.fläsk;
    fiskLabel.textContent = språkTexter.fisk;
    kycklingLabel.textContent = språkTexter.kyckling;
    skaldjurLabel.textContent = språkTexter.skaldjur;
    sorteraLabel.textContent = språkTexter.sortera;
    standardOptionLabel.textContent = språkTexter.standard;
    prisOptionLabel.textContent = språkTexter.pris;
    ordningText.textContent = språkTexter.ordningRubrik;
    fallandeLabel.textContent = språkTexter.fallande;
    stigandeLabel.textContent = språkTexter.stigande;
    rätterLabel.textContent = språkTexter.rätterRubrik;
    varukorgText.textContent = språkTexter.varukorgRubrik;
    tomVarukorgText.textContent = språkTexter.tomVarukorg;
    totaltLabel.textContent = språkTexter.totalt;
    tömVarukorgKnapp.textContent = språkTexter.tömKnapp;
    luckyDuckRubrikText.textContent = språkTexter.luckyDuckRubrik;
    sedanText.textContent = språkTexter.sedanText;

    // const luckyDuckRubrikText = document.querySelector("#luckyDuckRubrikText");
    // const sedanText = document.querySelector("#sedanText");

}

function läsInRätter(){
    rätterLista.innerHTML = ``;
    dataMenu = [...originalData];
    sorteraRätter();
    visaRätter();
    ändraSpråk();
}

function visaRätter(){
    for (let i = 0; i < dataMenu.length; i++){
        const rätt = dataMenu[i];
        const allergiSpans = rätt.allergies.map(a => `<span>${allergiÖversättning[språk][a]}</span>`).join('');
        const titel = språk == "sv" ? rätt.title.sv : rätt.title.en;
        const beskrivning = språk == "sv" ? rätt.description.sv : rätt.description.en;

        const section = document.createElement("section");
        section.innerHTML = `
            <div class="vänsterRätter">
                <h3>${titel}</h3>
                <p class="rättBeskrivning">${beskrivning}</p>
                <div class="maträttAllergier">${allergiSpans}</div>
            </div>
            <div class="högerRätter">
                <p class="priceText">${rätt.price}kr</p>
                <button>+</button>
            </div>`;

        const knapp = section.querySelector("button");
        knapp.addEventListener("click", function(){

            if (varukorgVarorValda.length == 0){
                varukorgLista.innerHTML = "";
            }
            varukorgVarorValda.push(dataMenu[i]);
            
            const varukorgSection = document.createElement("section");
            varukorgSection.innerHTML = `
                <div class="vänsterVarukorgRätt">
                    <h3>${titel}</h3>
                    <p class="rättBeskrivning">${beskrivning}</p>
                </div>
                <div class="högerVarukorgRätt">
                    <p class="priceText">${rätt.price}kr</p>
                    <button>-</button>
                </div>`;
            varukorgLista.appendChild(varukorgSection);
            räknaTotalen();
            visaAntalRätter();

            const removeButton = varukorgSection.querySelector(`button`);
            removeButton.addEventListener("click", function(){
                const index = varukorgVarorValda.indexOf(rätt);
                
                if (index !== -1){
                    varukorgVarorValda.splice(index, 1);
                }

                varukorgSection.remove();

                if (varukorgVarorValda.length == 0){
                    if (språk == "sv"){
                        varukorgLista.innerHTML += `<p>Din varukorg är tom</p>`;
                    }

                    else if(språk == "en"){
                        varukorgLista.innerHTML += `<p>Your cart is empty</p>`;
                    }
                    
                }
                räknaTotalen();
                visaAntalRätter();

            })
        });

        rätterLista.appendChild(section);

    }

    räknaTotalen();
    visaAntalRätter();
}

function räknaTotalen(){
    totaltVarukorgPris = 0;
    for (let i = 0; i < varukorgVarorValda.length; i++){
        totaltVarukorgPris += Number(varukorgVarorValda[i].price[0]);
    }

    totalKostnadVarukorgTagg.innerText = totaltVarukorgPris + "kr";
}

function visaAntalRätter(){
    const antal = varukorgVarorValda.length;
    if (språk == "sv"){
        antalIVarukorgText.innerText = antal + "st";
    }

    else if (språk == "en"){
        antalIVarukorgText.innerText = antal + "pcs";
    }
    
}

function sorteraRätter(){
    if (!nötCheck.checked && !fläskCheck.checked && !fiskCheck.checked && !kycklingCheck.checked && !skaldjurCheck.checked){

    }

    if (vegetariskCheck.checked){
        nötCheck.checked = false;
        fläskCheck.checked = false;
        fiskCheck.checked = false;
        kycklingCheck.checked = false;
        skaldjurCheck.checked = false;

        console.log("hej");
        dataMenu = dataMenu.filter(rätt => !rätt.meat.includes("beef"));
        dataMenu = dataMenu.filter(rätt => !rätt.meat.includes("pork"));
        dataMenu = dataMenu.filter(rätt => !rätt.meat.includes("fish"));
        dataMenu = dataMenu.filter(rätt => !rätt.meat.includes("chicken"));
        dataMenu = dataMenu.filter(rätt => !rätt.meat.includes("seafood"));
    }

    const valdaKött = [];
    if(nötCheck.checked) valdaKött.push("beef");
    if(fläskCheck.checked) valdaKött.push("pork");
    if(fiskCheck.checked) valdaKött.push("fish");
    if(kycklingCheck.checked) valdaKött.push("chicken");
    if(skaldjurCheck.checked) valdaKött.push("seafood");

    if (valdaKött.length > 0){
        dataMenu = dataMenu.filter(rätt => rätt.meat.some(m => valdaKött.includes(m)));
    }

    // if (nötCheck.checked){
    //     dataMenu = dataMenu.filter(rätt => rätt.meat.includes("beef"));
    // }

    // if (fläskCheck.checked){
    //     dataMenu = dataMenu.filter(rätt => rätt.meat.includes("pork"));
        
    // }

    if (glutenCheck.checked){
        dataMenu = dataMenu.filter(rätt => !rätt.allergies.includes("gluten"))
    }

    if (laktosCheck.checked){
        dataMenu = dataMenu.filter(rätt => !rätt.allergies.includes("lactose"))
    }

    if (äggCheck.checked){
        dataMenu = dataMenu.filter(rätt => !rätt.allergies.includes("egg"))
    }

    if (orderSelect.value == "standard" && radioButtonStigande.checked){
        dataMenu.reverse();
    }

    else if (orderSelect.value == "pris" && radioButtonStigande.checked){
        
        dataMenu = dataMenu.sort((a,b) => a.price[0] - b.price[0]);
    }

    else if (orderSelect.value == "pris" && radioButtonFallande.checked){
        dataMenu = dataMenu.sort((a, b) => b.price[0] - a.price[0]);
    }
}