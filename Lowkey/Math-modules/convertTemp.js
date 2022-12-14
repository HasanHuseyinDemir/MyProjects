export const convertTemp={
    celciusTo:(unit,celcius)=>{
        switch(unit){
            case "celcius":return celcius;
            case "fahrenheit":return ((celcius*(9/5))+32).toFixed(2);
            case "kelvin":return (celcius+273.15).toFixed(2);
            case "rankine":return ((celcius+273.15)*(9/5)).toFixed(2);
        }},
    fahrenheitTo:(unit,fahrenheit)=>{
        switch(unit){
            case "celcius":return (((fahrenheit-32)*5)/9).toFixed(2);
            case "fahrenheit":return fahrenheit;
            case "kelvin":return ((fahrenheit+459.67)*(5/9)).toFixed(2);
            case "rankine":return fahrenheit+459.67;
        }
    },
    kelvinTo:(unit,kelvin)=>{
        switch(unit){
            case "celcius":return (kelvin-273.15).toFixed(2);
            case "fahrenheit":return ((kelvin*(9/5))-459.67).toFixed(2);
            case "kelvin":return kelvin;
            case "rankine":return (kelvin*(9/5)).toFixed(2);
        }
    },
    rankineTo:(unit,rankine)=>{
        switch(unit){
            case "celcius":return ((rankine-491.67)*(5/9)).toFixed(2);
            case "fahrenheit":return rankine-459.67;
            case "kelvin":return (rankine*(5/9)).toFixed(2);
            case "rankine":return rankine;
        }

    }
}