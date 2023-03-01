window.addEventListener("load", function()
 {
    const dodajTekst = document.getElementById('text_enter')
    const gumbAdd = document.getElementById('button_add')
    const obrisiListu = document.getElementById('remove')
    const stavke = document.getElementById('tehnologije');

    function dodajStavku() {
        text = dodajTekst.value
        let newStavka = document.createElement("li");
        newStavka.textContent = text
        stavke.appendChild(newStavka)
        dodajTekst.value = ''
        dodajTekst.focus()
    }
    gumbAdd.addEventListener('click', dodajStavku);
    
    function obrisiCijeluListu() {
        stavke.innerHTML = "";
    }
    
    obrisiListu.addEventListener('click', obrisiCijeluListu)
});