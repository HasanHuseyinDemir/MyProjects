String.prototype.strToNumber=function(){
    let str=this.split("");
    var arr="";
    str.forEach((element)=>{
        switch(element){
            case "a":case "A":arr+="4";break;
            case "e":case "E":arr+="3";break;
            case "o":case "O":arr+="0";break;
            case "l":case "L":case "ı":case "i":case "İ":case "I":arr+="1";break;
            case "t":case "T":arr+="7";break;
            case "s":case "S":arr+="5";break;
            case "b":case "B":arr+="6";break;
            case "z":case "Z":arr+="2";break;
            default:arr+=element;
        }
    })
    return arr.toUpperCase()
}