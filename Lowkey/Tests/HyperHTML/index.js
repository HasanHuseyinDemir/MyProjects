
let x = 0;
let divTest=hyperHTML.wire({x:x},":id")`<div>Selamke ${x}</div>`;

function Main (){

    hyperHTML(document.querySelector("#app"))/*html*/`
    <h1 align="center">Selam</h1>
    ${divTest}
    <button onclick=${()=>{x++,Main()}}>${x} Selam</button>
    <button onclick=${()=>{x++,Main()}}>${x} Selam</button>
    `    
}

Main();