let numeros =[17, 43, 8, 4, 97, 56, 29, 95]

numeros.forEach((elemento) => {
    let impapar = elemento % 2
    if (impapar % 2 == 0){
        console.log(elemento + " é par")
        }{ if (impapar % 2 == 1){
            console.log(elemento + " é impar")
        }
    }
})