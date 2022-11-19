let Countdown={
    seconds:0,
    active:false,
    nodeList:[
        ".countDownTimer",
        "#startStopButton"
    ],
    time:{
        hour:"00",
        minute:"00",
        second:"00"
    },
    interval:setInterval(()=>{
        if(Countdown.seconds<=0&&Countdown.active){
            Countdown.actions.stop();
            alert("Timer Stopped")
        }
        if(Countdown.active){
            Countdown.actions.tick();
        }
    },1000),
    actions:{
        reset:()=>{
            Countdown.seconds=0;
            Countdown.time.hour="00"
            Countdown.time.minute="00";
            Countdown.time.second="00";
        },
        convertToSecond:()=>{
            let seconds=0;
            seconds+=parseInt(inputHourCountdown.value>0?inputHourCountdown.value*3600:0)
            seconds+=parseInt(inputMinuteCountdown.value>0?inputMinuteCountdown.value*60:0)
            seconds+=parseInt(inputSecondCountdown.value>0?inputSecondCountdown.value:0)
            return seconds;
        },
        getTime:()=>{
            Countdown.actions.convertToHMS();
            Countdown.actions.twoDigit();
        },
        setTimer:()=>{
            Countdown.seconds=Countdown.actions.convertToSecond();
            //Hour Minute Second Converter
            Countdown.actions.getTime();
            Countdown.actions.start();

            nodeValueEqualizer();
        },
        convertToHMS:()=>{
            Countdown.time.hour=Math.floor(Countdown.seconds/3600);
            Countdown.time.minute=Math.floor((Countdown.seconds%3600)/60);
            Countdown.time.second=Countdown.seconds%60;
        },
        twoDigit:()=>{
            Countdown.time.hour<10?Countdown.time.hour="0"+Countdown.time.hour:""
            Countdown.time.minute<10?Countdown.time.minute="0"+Countdown.time.minute:""
            Countdown.time.second<10?Countdown.time.second="0"+Countdown.time.second:""
        },
        toggle:()=>{Countdown.active=!Countdown.active;},
        stop:()=>{Countdown.active=false},
        start:()=>{Countdown.active=true},
        tick:()=>{
            Countdown.seconds--;
            Countdown.actions.getTime();
            nodeValueEqualizer();
        }
    },
    modules:{
        get input(){
            return /*html*/`    
            <input type="number" min=0 max=999 class="timer-input" value=0 id="inputHourCountdown">
            <input type="number" min=0 max=59 class="timer-input" value=0 id="inputMinuteCountdown">
            <input type="number" min=0 max=59 class="timer-input" value=0 id="inputSecondCountdown">`
        },
        get nodes(){
            return /*html*/`
            <div id="cdNodes">
            <span class="countDownTimer" id="cd-hour" data="Countdown.time.hour"></span> : 
            <span class="countDownTimer" id="cd-minute" data="Countdown.time.minute"></span> : 
            <span class="countDownTimer" id="cd-second" data="Countdown.time.second"></span>
            </div>
            `
        }
    },
    data:()=>{return/*html*/`
    <div>
    <h1>CountDown Timer</h1>
    <!--Inputlist-->
    ${Countdown.modules.input}

    <hr>
    <button onclick="Countdown.actions.setTimer()">Start</button>
    <br><br>
    <!--Nodes-->
    ${Countdown.modules.nodes}
    <button onclick="Countdown.actions.toggle()"><span id="startStopButton" data="Countdown.active?'Stop':'Start'"></span></button>
    <button onclick="Countdown.actions.reset()">Reset</button>
    </div>
    `}
}


