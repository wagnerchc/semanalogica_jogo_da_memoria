// AULA DE JAVASCRIPT
// Jogo da memória ()
// pares: [[1,1], [2,2] ... [8:8]]; ( x )
// escolher 2 cartas e verificar se elas são iguais (  )
// se for igual, vai somar pontos (  )
// se não for igual, não soma (  )

const board = document.querySelector(".table_board");

let pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

pairs.forEach(pair => {
    const card = document.createElement("div");

    card.className = "table_board_card";
    card.innerText = pair;

    card.addEventListener("click", itIsAMatch);
    
    board.append(card);
});

let value1
let value2

function itIsAMatch(card) {
    if(value1) {
        value2 = card.target.innerText;
    } else {
        value1 = card.target.innerText;
    }
    if(value1 == value2) {
        console.log("Formou um par")
    } else {
        console.log("Continue tentando")
    }
    
    console.log("O primeiro valor é: ", value1);
    console.log("O segundo valor é: ", value2);
    
}