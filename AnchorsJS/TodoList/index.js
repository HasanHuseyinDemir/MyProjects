import {html,c,state} from "https://cdn.jsdelivr.net/gh/hasanhuseyindemir/Anchors-Framework/Versions/1.2-Setter%20Update/Minified/anchors.min.mjs"
import { Add } from "./add.js"
import { Locale,language } from "./Locale.js"
export {html,c,state}

export const MainPage=()=>{
    let Main = html/*html*/`
    <div class="container">
    
    <h1 align="center">{Locale:Title}</h1>
    
    <hr>
    
    {Görev Ekleme Alanı}
    
    <hr>

    {Görevlerin Listesi}

    </div>
    `

    //{Görev Ekleme Alanı}
    Main.getAnchor("Görev Ekleme Alanı").render(Add)

    let Title=Main.getNodes("Locale:Title")
    
    let Update=()=>{
        Title.text=Locale.Application[language()]
    }
    Update()

    return Main
}

document.querySelectorAll("#app").render(MainPage)