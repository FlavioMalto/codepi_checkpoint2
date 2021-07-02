// Checkpoint 2 Programação imperativa - 02/07/2021

function microondas(comida, tempo) {
    switch (comida) {
        case "Pipoca":
            if (tempo >= 20 && tempo < 30) {
                console.log("A comida queimou!")
            } else if (tempo >= 30) {
                console.log("Kabumm!!")
            } else if (tempo < 10) {
                console.log("Tempo insuficiente!")
            } else {
                console.log("Prato pronto, bom apetite!")
            }
            break;
        case "Macarrão":
            if (tempo >= 16 && tempo < 24) {
                console.log("A comida queimou!")
            } else if (tempo >= 24) {
                console.log("Kabumm!!")
            } else if (tempo < 8) {
                console.log("Tempo insuficiente!")
            } else {
                console.log("Prato pronto, bom apetite!")
            }
            break;
        case "Carne":
            if (tempo >= 30 && tempo < 45) {
                console.log("A comida queimou!")
            } else if (tempo >= 45) {
                console.log("Kabumm!!")
            } else if (tempo < 15) {
                console.log("Tempo insuficiente!")
            } else {
                console.log("Prato pronto, bom apetite!")
            }
            break;
        case "Feijão":
            if (tempo >= 24 && tempo < 36) {
                console.log("A comida queimou!")
            } else if (tempo >= 36) {
                console.log("Kabumm!!")
            } else if (tempo < 12) {
                console.log("Tempo insuficiente!")
            } else {
                console.log("Prato pronto, bom apetite!")
            }
            break;
        case "Brigadeiro":
            if (tempo >= 16 && tempo < 24) {
                console.log("A comida queimou!")
            } else if (tempo >= 24) {
                console.log("Kabumm!!")
            } else if (tempo < 8) {
                console.log("Tempo insuficiente!")
            } else {
                console.log("Prato pronto, bom apetite!")
            }
            break;
    }
}

// testes
microondas("Pipoca", 15)
microondas("Carne", 40)
microondas("Feijão", 40)
microondas("Macarrão", 7)
microondas("Brigadeiro", 12)