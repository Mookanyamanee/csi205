import { useEffect, useState } from "react"
import Value from "./Value"

function Temperature(){
    const [celsius, setCelsius] = useState(0)
    const [Fahrenheit, setFahrenheit] = useState(32)
    const [Kelvin, setKelvin] = useState(273.15)
    const [active, setActive] = useState("")

    useEffect(() => {
        if (active === "C") {
            setFahrenheit(celsius * 9/5 + 32)
            setKelvin(celsius + 273.15)
        } else if (active === "F") {
            const c = (Fahrenheit - 32) * 5/9
            setCelsius(c)
            setKelvin(c + 273.15)
        } else if (active === "K") {
            const c = Kelvin - 273.15
            setCelsius(c)
            setFahrenheit(c * 9/5 + 32)
        }
    }, [celsius, Fahrenheit, Kelvin, active])

    return (
        <>
            <div className="border border-2 border-black mt-3 rounded-3 mx-auto p-3" style={{width:"fit-content"}}>
                <h1 className="text-center">
                    TEMPERATURE
                </h1>
                
                <div className="d-flex gap-3 fw-bold">
                    <div className="text-center ">
                        <div className="badge bg-primary fs-3">
                        {celsius.toFixed(2)} °C
                        </div>
                        <Value name={"CELSIUS"} value={celsius} setValue={setCelsius} setActive={() => setActive("C")}/>
                
                    </div>
                    <div className="text-center">
                        <div className="badge bg-primary fs-3">
                        {Fahrenheit.toFixed(2)}°F
                        </div>
                        <Value name={"FAHRENHEIT"} value={Fahrenheit} setValue={setFahrenheit} setActive={() => setActive("F")}/>
                    </div> 
                    <div className="text-center">
                        <div className="badge bg-primary fs-3">
                        {Kelvin.toFixed(2)}°K
                        </div>
                        <Value name={"KELVIN"} value={Kelvin} setValue={setKelvin} setActive={() => setActive("K")}/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Temperature