const prompt = require("prompt-sync")();
clave = prompt("Ingresa tu clave: ");

function validarclave (clave){
    
    if (clave.length <= 8){
        return false
    }
    return true

    for(let i = 0; i < clave.length; i++){
        if(clave[i] >= 'A' && clave[i] <= 'Z'){
            return true
        }
        return false
    }

    for(let i = 0; i < clave.length; i++){
        if(clave[i] >= '0' && clave[i] <= '9'){
            return true
        }
        return false
    }
}
console.log(validarclave(clave));