import { state } from "./index.js";

const Task={
    list:[],
    get count(){
        return this.list.length
    },
    updateStates:function(){
        setTaskCount(this.count)
    }
}

export const [taskCount,setTaskCount,listTaskCount] = state(Task.count)
