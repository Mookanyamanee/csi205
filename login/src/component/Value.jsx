import { useEffect} from "react"

function Value ({name, type, value, setValue, setActive}) {
    // const [value,setValue] = useState(0)
    // useEffect(() => {
    //     setValue(num || 0)
    // }, [num])
    return (
        <div className="border border-2 border-black m-auto rounded-3 p-2 mt-3 bg-secondary-subtle" style={{width : "fit-content"}}>
            <h1 className="text-primary text-center">{name ? name : "none"}</h1>
            <div className="d-flex justify-content-between gap-2">
                <button className="btn btn-danger" onClick={
                    () => {setValue(prev => prev - 1) 
                    setActive && setActive()}}>&minus;</button>
                <p className="fs-4">{type === 'real' ? value.toFixed(2) : Math.round(value)}</p>
                <button className="btn btn-success" onClick={
                    () => {setValue(prev => prev + 1)
                        setActive && setActive()
                    }}>+</button>
            </div>
        </div>
    )
}
export default Value