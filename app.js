
var size = document.querySelector('#size')
var sizeCharacter = document.querySelector('#sizeCharacter')

var inputCapitalLetters = document.querySelector('#capitalLetters')
var inputNumbers = document.querySelector('#numbers')
var inputSpecials = document.querySelector('#specials')

var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '1234567890'
var specials = '!@#$%¨&*' 

var password = ''

sizeCharacter.innerHTML = size.value

size.oninput = () =>{
    sizeCharacter.innerHTML = size.value
}

    //checando checkbox

function generateCharset(){

    let charset = 'abcdefghijklmnopqrstuvwxyz'

    if(inputCapitalLetters.checked === true){
        charset = charset + capitalLetters

    }if(inputNumbers.checked === true){
        charset = charset + numbers
    
    }if(inputSpecials.checked === true){
        charset = charset + specials
    }
    
    return charset
  
}

    //gerando a senha

function generatePassword(){
    
    password = ''

    let charset = generateCharset()

    for(let i = 0, n = charset.length; i < size.value; ++i){
        password += charset.charAt(Math.floor(Math.random() * n))
    }
    
    let result = document.querySelector('#result').innerHTML = password 

}

    //copiando a senha

function copyPasswold(){
    
    navigator.clipboard.writeText(password)
    alert('senha copiada com sucesso')
}
