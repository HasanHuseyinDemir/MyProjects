import * as sarcastic from "../../Lowkey/String-modules/toSarcastic.js"

const Page=()=>{
    let Main=html/*html*/`
    <>
        <h1 align="center">Sarcastic Text Generator</h1>

        <div align="center" class="pad-20 whole">
        <h2>Insert Text</h2>
        <input @model="text">
        <br><br>
        <h2>Output</h2>
        <input @value="convert" readonly>
        </div>

        <div id="parameters">
                <div class="radioInput"><input @oninput="changeType(random)" name="parameter" checked type="radio"> Random</div>
                <div class="radioInput"><input @oninput="changeType(15)" name="parameter" type="radio"> Number</div>
        </div>

    </>
    `

    Main.states({
        text:"",
        sarcasticText:"",
        type:"random",
        convert(){
            return this.text.toSarcastic(this.type);
        },
        changeType(type){
            this.type=type
            Main.effect();
        }
    })

    return Main
}

document.querySelectorAll("app").render(Page)