

//Função que adiciona os elementos e calcula a área do triangulo
function triangulo(){

    //limpeza da seção onde serão criadas as entradas de dados
    let section = document.getElementById('manipulaDados')
    section.innerHTML = ''

    //criação da entrada do valor base
    let base = document.createElement('input')
    base.type = 'number'
    base.id = 'base'
    base.placeholder = 'Base(m)'
    //estilização CSS do elemento
    base.style.width = '100px'
    base.style.margin = '10px'
    base.style.color = 'black'
   

    //criação da entrada do valor altura
    let altura = document.createElement('input')
    altura.type = 'number'
    altura.id = 'altura'
    altura.placeholder = 'Altura(m)'
    //estilização CSS do elemento
    altura.style.width = '100px'
    altura.style.margin = '10px'
    altura.style.color = 'black'


    //criação da entrada do botão que dispara a função calcularAreaTriangulo
    let butonCalcular = document.createElement('input')
    butonCalcular.id = 'buttonCalcular'
    butonCalcular.value = 'Calcular Área'
    butonCalcular.type = 'button'
    //estilização CSS do elemento
    butonCalcular.style.width = '150px'
    butonCalcular.style.margin = '10px'
    butonCalcular.style.color = 'black'
    butonCalcular.style.backgroundColor = '#CD853F'
    butonCalcular.style.border = 'none'
    butonCalcular.style.padding = '2px'
    butonCalcular.style.cursor = 'pointer'


    section.appendChild(base)
    section.appendChild(altura)
    section.appendChild(butonCalcular)

    //criação do elemento para receber o resultado
    let campoResult = document.createElement('section')
    campoResult.id = 'resultado'
    section.appendChild(campoResult)
    
    butonCalcular.onclick = function(){calculaAreaTriangulo()} 
}


function calculaAreaTriangulo(){
    //recuperação do elemento que recebe o resultado
    let campoResult = document.getElementById('resultado')
    campoResult.innerHTML = ''

    //criação do paragrafo onde será adicionado o resultado
    let result = document.createElement('p')
    //estilização css
    result.style.margin = '20px'
    result.style.fontWeight = 'Bold'
    result.style.textTransform = 'uppercase'

    //recuperação dos dados de base e altura
    let base = Number(document.getElementById('base').value)
    let altura = Number(document.getElementById('altura').value)

    let area = (base*altura)/2

    result.innerHTML = `A área do triângulo retângulo é ${area} m2`

    campoResult.appendChild(result)
}




function circulo(){
    //recuperação do elemento onde será criado os campos de entrada
    let section = document.getElementById('manipulaDados')
    section.innerHTML = ''

    //criação dos campos de entrada
    let raio = document.createElement('input')
    raio.type = 'number'
    raio.placeholder = 'Raio [m]'
    raio.id = 'raio'
    //estilização CSS do elemento
    raio.style.width = '100px'
    raio.style.margin = '10px'
    raio.style.color = 'black'



    let butonCalcular = document.createElement('input')
    butonCalcular.id = 'buttonCalcular'
    butonCalcular.value = 'Calcular Área'
    butonCalcular.type = 'button'
    //estilização CSS do elemento
    butonCalcular.style.width = '150px'
    butonCalcular.style.margin = '10px'
    butonCalcular.style.color = 'black'
    butonCalcular.style.backgroundColor = '#CD853F'
    butonCalcular.style.border = 'none'
    butonCalcular.style.padding = '2px'
    butonCalcular.style.cursor = 'pointer'

    section.appendChild(raio)
    section.appendChild(butonCalcular)

    //criação do elemento para receber o resultado
    let campoResult = document.createElement('section')
    campoResult.id = 'resultado'
    section.appendChild(campoResult)
    
    butonCalcular.onclick = function(){calculaAreaCirculo()} 
}

function calculaAreaCirculo(){

    //recuperação do elemento que recebe o resultado
    let campoResult = document.getElementById('resultado')
    campoResult.innerHTML = ''

    //criação do paragrafo onde será adicionado o resultado
    let result = document.createElement('p')
    //estilização css
    result.style.margin = '20px'
    result.style.fontWeight = 'Bold'
    result.style.textTransform = 'uppercase'

    //recuperação dos dados de base e altura
    let raio = Number(document.getElementById('raio').value)

    let area = (raio*raio)*3.14

    result.innerHTML = `A área do círculo é ${area} m2`

    campoResult.appendChild(result)

}


function retangulo(){
    //limpeza da seção onde serão criadas as entradas de dados
    let section = document.getElementById('manipulaDados')
    section.innerHTML = ''

    //criação da entrada do valor base
    let base = document.createElement('input')
    base.type = 'number'
    base.id = 'base'
    base.placeholder = 'Base(m)'
    //estilização CSS do elemento
    base.style.width = '100px'
    base.style.margin = '10px'
    base.style.color = 'black'
   

    //criação da entrada do valor altura
    let altura = document.createElement('input')
    altura.type = 'number'
    altura.id = 'altura'
    altura.placeholder = 'Altura(m)'
    //estilização CSS do elemento
    altura.style.width = '100px'
    altura.style.margin = '10px'
    altura.style.color = 'black'


    //criação da entrada do botão que dispara a função calcularAreaTriangulo
    let butonCalcular = document.createElement('input')
    butonCalcular.id = 'buttonCalcular'
    butonCalcular.value = 'Calcular Área'
    butonCalcular.type = 'button'
    //estilização CSS do elemento
    butonCalcular.style.width = '150px'
    butonCalcular.style.margin = '10px'
    butonCalcular.style.color = 'black'
    butonCalcular.style.backgroundColor = '#CD853F'
    butonCalcular.style.border = 'none'
    butonCalcular.style.padding = '2px'
    butonCalcular.style.cursor = 'pointer'


    section.appendChild(base)
    section.appendChild(altura)
    section.appendChild(butonCalcular)

    //criação do elemento para receber o resultado
    let campoResult = document.createElement('section')
    campoResult.id = 'resultado'
    section.appendChild(campoResult)
    
    butonCalcular.onclick = function(){calculaAreaRetangulo()} 
}


function calculaAreaRetangulo(){
    //recuperação do elemento que recebe o resultado
    let campoResult = document.getElementById('resultado')
    campoResult.innerHTML = ''

    //criação do paragrafo onde será adicionado o resultado
    let result = document.createElement('p')
    //estilização css
    result.style.margin = '20px'
    result.style.fontWeight = 'Bold'
    result.style.textTransform = 'uppercase'

    //recuperação dos dados de base e altura
    let base = Number(document.getElementById('base').value)
    let altura = Number(document.getElementById('altura').value)

    let area = base*altura

    result.innerHTML = `A área do retângulo é ${area} m2`

    campoResult.appendChild(result)
}
