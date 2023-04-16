import {useState} from "react";

export const useCount = (valInicial = 1, min , max) =>{
    
    if(valInicial < min || valInicial > max) {
        valInicial = min
    } 

    const [count , setCount] = useState(valInicial);

    const sum = () => count < max && setCount(count + 1);
    const minus = () => count > min && setCount(count - 1);

    // VER ESTA PARTE DEL CÓDIGO , QUÉ PASA SI DE ENTRADA EL VALOR INCIAL ESTÁ MAL
    const reset = () => setCount(valInicial);

    return { count, sum, minus, reset};
}