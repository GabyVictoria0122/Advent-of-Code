let calorias = []

let lineReader = require('line-reader')
lineReader.eachLine('input.txt', calorias, function(line, last){

    let somaCalorias = []
    let soma = 0
    let elfo = 0
    let maior = 0

    if (last) {
        return false; // stop reading
    }else {
        let number = parseInt(line)
        calorias.push(number)

        for (caloria of calorias) {
            if(isNaN(caloria)){
                somaCalorias.push(soma)
                soma = 0
            } else{
                soma += caloria
            }
        }
    }
    
    for (i of somaCalorias) {
        elfo += 1
        if (i >= maior){
            let certo = elfo
            maior = i
            // console.log( maior, certo)
        }
    }
})

// Resposta 70764









