import {createSignal} from "solid-js "
import { Pattern } from "./Pattern";

export const TodoList=()=>{
    let [todos,setTodos]=createSignal([]);
    let [input,setInput]=createSignal("");
    let addTodo=()=>{
        //batch(()=>{
        setTodos((prev)=>[...prev,input()])
        console.log(todos());
        setInput("")//)
    }
    return(
    <>
        <h1>Todolist {todos().length || ""}</h1>
        <input value={input()} onInput={(e)=>setInput(e.currentTarget.value)}/>
        <button onClick={addTodo}>Add</button>
        <hr/>
        {todos().length==0 ? "Add a task":""}
        <For each={todos()}>
            {(todo,i)=>(
                <Pattern text={todo} i={i}/>
            )}
        </For>
    </>
    )
}