import { useEffect, useState } from "react"

function Timer({num}){
    const [second, setSecond] = useState(num || 0)
    const [isRun, setisRun] = useState(false)
    function convert(second){
        
        const minute = Math.floor(second / 60)
        const second_in_minute = second % 60
        const minute_in_hour = minute % 60
        const hour = Math.floor(minute / 60)
        const hour_in_day = hour % 60
        const day = Math.floor(hour / 24)
        if (second < 60){
            return second + 's'
        }
        else if (second > 1 && minute < 60){
            return minute + 'm ' + second_in_minute + 's'
        }
        else if (minute >=60 && hour < 24){
            return hour + 'h ' + minute_in_hour + 'm ' + second_in_minute + 's'
        }
        else {
            return day +'d ' + hour_in_day + 'h '+ minute_in_hour + 'm ' + second_in_minute + 's'
        }
        // return day + 'd' + hour + 'h' + minute + 'm' + second + 's'
    }
    useEffect(() => {
        let interval;
        if (isRun) {
            interval = setInterval(() => {
                setSecond((prev) => prev + 1);
            }, 1000);
        } return () => clearInterval(interval);
        
    }, [isRun]);
    function reset(){
        setSecond(0)
    }
    function clickRun(){
        if (isRun){
            setisRun(false)
        }
        else{
            setisRun(true)
        }
        
    }
    return (
        <>
            <div className="border border-2 border-black m-auto rounded-3 p-2 mt-3 bg-secondary-subtle" style={{width : "fit-content"}}>
                <h1 className="text-center">TIMER</h1>
                <input className="rounded-2 text-end" value={convert(second)} readOnly/>
                <div className="d-flex justify-content-between mt-2">
                    <button className=" btn btn-danger" onClick={reset}><i className="bi bi-arrow-counterclockwise"></i>Reset</button>
                    <button className={isRun ? "btn btn-warning" : "btn btn-success"} onClick={clickRun}><i className={isRun ? "bi bi-pause" : "bi bi-play"}></i>{isRun ? "pause" : "play"}</button>
                </div>
            </div>
            
        </>
    )
}
export default Timer
