// Mexendo no css
document.body.style.backgroundColor = "green"

//Alterando a head do HTML
document.title = "Aplicando DOM"
document.documentElement.lang = "pt-br"

//  --- Criação de elementos com o JS

// Cria variável e o botão
const button = document.createElement('button');
// Adiciona o conteúdo do botão
document.body.appendChild(button).innerHTML = "Enviar"

button.style.backgroundColor = "red"
button.style.borderRadius = "5px"
button.style.fontSize = "50px"
