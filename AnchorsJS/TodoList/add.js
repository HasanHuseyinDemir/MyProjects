import { html, state } from "./index.js"
import { listTaskCount } from "./tasks.js"

export const Add=()=>{
    let start=/*html*/`<div class='d-flex justify-content-between'>`;



    let Main=html/*html*/`
    <div>
    <h2>Add {Görev Sayısı}</h2>
    ${start}<span>Görev Adı</span> <input [[Input]]> </div>
    ${start}<span>Önem Yüzdesi {Priority}%</span> <input [[priority input]] type="range" min=0 max=100 value=0> </div>
    <button [[Görev Ekle Butonu]]>Ekle Butonu</button>
    </div>
    `

    listTaskCount.push(Main.getNodes("Görev Sayısı"));
    const gorevInput=Main.getMark("Input");
    const ekleButton=Main.getMark("Görev Ekle Butonu");

    const [priority,setPriority]=state(0,Main.getNodes("Priority"));

    const priorityInput=Main.getMark("priority input");
    priorityInput.onInput=(e)=>{setPriority(parseInt(e.target.value))}
    
    ekleButton.onClick=()=>{
        console.log({value:gorevInput.value,priority:priority()});
    }

    return Main
}