import { createSignal, onCleanup} from "solid-js";

export const DigitalClock=()=>{
    let [hour,setHour]=createSignal(0)
    let [minute,setMinute]=createSignal(0)
    let [second,setSecond]=createSignal(0)
    let timer=setInterval(()=>{
        let date = new Date()
        setHour(date.getHours()),
        setMinute(date.getMinutes()),
        setSecond(date.getSeconds()),
        console.log("Selam")
    },1000)
    onCleanup(()=>{
        clearInterval(timer)
    })
    return(
        <>
            <h1>Digital Clock</h1>
            {hour()} : {minute()} : {second()}
        </>
    )
}