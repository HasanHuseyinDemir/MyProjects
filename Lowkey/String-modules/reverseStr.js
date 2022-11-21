String.prototype.reverseStr=function(){
    let str=this.split("");
    let arr=[];
    let word="";
    str.forEach((e)=>{
        arr.unshift(e)
    });
    arr.forEach((e)=>{
        word+=e;
    })

    return word;
}