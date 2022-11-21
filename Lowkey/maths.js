import {convertTemp} from "./Math-modules/convertTemp.js" 

console.log(convertTemp.rankineTo("kelvin",250))

/** || convertTemp || **
*
* : Celcius<=>Kelvin<=>Fahrenheit<=>Rankine Temperature Converter
*
* ? convertTemp.kelvinTo("celcius",20) 
* * 20 Kelvin => -253.15 Celcius Returns -253.15
*
* ? convertTemp.celciusTo("kelvin",-253.15) 
* * -253.15 Celcius => 20 Kelvin Returns 20
*
* ? convertTemp.fahrenheitTo("celcius",50)
* * 50 Fahrenheit => 10 Celcius Returns 10
*
* ? convertTemp.rankineTo("kelvin",250)
* * 250 Rankine => 138.89 Kelvin
*
*/