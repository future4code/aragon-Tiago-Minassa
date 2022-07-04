const convertC = (temperature, scale) => {
    if(scale === "F"){
        const temperatureF = (temperature * 9 / 5) + 32
        return `${temperature}º Celsius é igual a ${temperatureF} º Farenheit.`;
    
    } else if (scale === "K") {
        const temperatureK = (temperature + 273.15);
        return `${temperature} º Celsius é igual a ${temperatureK} Kelvin.`;
    
    } else {
        return `Erro, parametro inválido (${scale}).`;
    }
};

console.log(convertC(56, "K"))