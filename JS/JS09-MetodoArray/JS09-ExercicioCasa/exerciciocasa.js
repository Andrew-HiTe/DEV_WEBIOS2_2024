let numeros = [17, 43, 8, 4, 97, 56, 29, 95];

numeros.forEach((elemento) => {
    let impapar = elemento % 2;
    if (impapar == 0) {
        console.log(elemento + " é par");
    } else {
        console.log(elemento + " é impar");
    }
});