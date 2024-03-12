import { useRef } from "react";

const UserefPgm =()=> {
    const inputref=useRef(null);
const focusinput=() =>
{
inputref.current.focus()
}
const readinputvalue=() => {
    console.log(inputref.current.value);
}
return (
    <>
    <input type="text" ref={inputref} />
    <button onClick ={focusinput}>FocusInput</button>
    <button onClick ={readinputvalue}>InputValue</button>
    </>
) }
export default UserefPgm;