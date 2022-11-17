const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("startText");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");


piedraBtn.addEventListener("click", () => {
    play(PIEDRA)
});
papelBtn.addEventListener("click", () => {
    play(PAPEL)
});
tijeraBtn.addEventListener("click", () => {
    play(TIJERA)
});

function play(userOption) {

    userImg.src = "img/" + userOption + ".svg";
    

    resultText.innerHTML = "¡ELIGIENDO!";

    setInterval(function() {
        const machineOption = calcMachineOption();

        machineImg.scr = "img/" + machineOption + ".svg";
        
    }, 150);

    setTimeout(function () {

        const machineOption = calcMachineOption();

        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".svg";


        switch (result) {
            case EMPATE:
                resultText.innerHTML = "¡EMPATASTE!";
                break;
            case GANASTE:
                resultText.innerHTML = "¡GANASTE!";
                break;
            case PERDISTE:
                resultText.innerHTML = "¡PERDISTE!";
                break;
    
        }
        
    }, 1500);

}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}


function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return EMPATE

    } else if (userOption === PIEDRA) {

        if (machineOption === PAPEL) return PERDISTE;
        if (machineOption === TIJERA) return GANASTE;

    } else if (userOption === PAPEL) {

        if (machineOption === TIJERA) return PERDISTE;
        if (machineOption === PIEDRA) return GANASTE;

    } else if (userOption === TIJERA) {

        if (machineOption === PIEDRA) return PERDISTE;
        if (machineOption === PAPEL) return GANASTE;
    }
}