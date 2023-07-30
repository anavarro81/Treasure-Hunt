let elements =prompt('Introduce un numero de elementos')


// Genera numero aleatorio entre dos números
function RandonNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

let TreasureNumber = 0
let attempts = 0

const ckicked = (event) => {
    
    const img$$ = document.querySelectorAll('img')
    const  attempts$$ = document.querySelector('[data-function="attempts"]')
    
    console.log('Evento = ' + event.currentTarget.id)
    // Tesoro encontrado
    if (event.currentTarget.id == TreasureNumber) {        
        event.currentTarget.src= "./img/chest.png" 
        alert ('¡Enhorabuena: Has ganado!') 
    // Intento Fallido. 
    } else {
        event.currentTarget.src= "./img/skull.png" 
        attempts++
        attempts$$.textContent = attempts; 
    }
    

}


// Agrega al DOM las Xs
for (let index = 0; index < elements; index++) {
    let img_x = document.createElement('img')
    img_x.src= "./img/x.png"
    img_x.setAttribute('id', `${index+1}`)
    img_x.addEventListener('click', function () {ckicked(event)})
    document.body.appendChild(img_x)
    
}

// Genera un numero aletorio para ocultar el tesoro. 
TreasureNumber = Math.floor(RandonNumber(1,elements))
console.log((TreasureNumber));
