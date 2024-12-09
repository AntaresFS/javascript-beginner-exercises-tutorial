// Your code here:
function bottlesOfMilk (){
    let lyrics = "";    // Para almacenar la canción completa

    for(let bottles = 99; bottles >= 0; bottles--){
        if(bottles > 1){
            // Caso general
            lyrics += `${bottles} bottles of milk on the wall, ${bottles} bottles of milk.\n`;
            lyrics += `Take one down and pass it around, ${bottles - 1} ${bottles - 1 === 1 ? 'bottle' : 'bottles'} of milk on the wall.\n\n`;
        } else if(bottles === 1){
            // Caso especial para 1 botella
            lyrics += `${bottles} bottle of milk on the wall, ${bottles} bottle of mil.\n`;
            lyrics += `Take one down and pass it around, no more bottles off beer on the wall.\n\n`;
        } else{
            // Caso especial para 0 botellas
            lyrics += 'No more bottles of milk on the wall, no mor bottles of milk.\n';
            lyrics += 'Go to the store and buy some more, 99 bottles of milk on the wall.\n\n';
        }
    }

    return lyrics;
}

console.log(bottlesOfMilk());