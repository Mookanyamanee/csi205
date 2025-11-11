import Value from "../component/Value";
import Timer from "../component/timer";
import Adder from "../component/Adder";
import Temperature from "../component/temperature";
import { useState } from "react";
const Components = () => {
    const [counter, setCounter] = useState(0)
    return ( <>
        <h2 className="text-center">components</h2>
        
        <div className="d-grid justify-content-center" style={{display: "grid", gridTemplateColumns: "repeat(3, 0fr)"}}>
            <Value name={"COUNTER"} value={counter} setValue={setCounter} type={"integer"} setActive={null}/>
            <Timer num={0}/>
            <Timer num={10}/>
            <Adder name={"ADD"}  />
            <Temperature />
        </div>
        

        <p className='text-center fw-bold mt-3'>67112209 มุกอัญญมณี แก้วลาดวงษ์</p>
    </>);
}
 
export default Components;