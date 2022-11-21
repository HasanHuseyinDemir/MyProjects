String.prototype.toSarcastic=function(arg){
    let str=this.toLowerCase().split("");
    var arr="";
    str.forEach((element,index) => {
        if(arg=="random"||arg=="Random"){
            if(Math.random()<0.5){
                arr+=element.toLowerCase();
            }else{
                arr+=element.toUpperCase();
            }
        }else if(typeof arg=="number"){
            if(index%arg==0){
                arr+=element.toLowerCase();
            }else{
                arr+=element.toUpperCase();
            }
        }else{
            index%2==0?arr+=element.toLowerCase():arr+=element.toUpperCase();
        }

    });
    return arr;
};




