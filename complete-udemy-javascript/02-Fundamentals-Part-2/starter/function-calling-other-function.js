const cutPieces = function(fruit){
    return fruit*4;
}


const fruitProcessor = function (apples , oranges){
    
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `juice with ${applePieces} pices of apple and ${orangePieces} pieces of orange`;

    return juice;


}

console.log(fruitProcessor(2,3))
