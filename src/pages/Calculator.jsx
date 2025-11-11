const Calculator = () => {
    let screen = '0'
    let state = "s1"
    let lastOperator = ''
    let firstOperand = 0
    let secondOperand = 0
    let equal = 0
    let result = 0
    let manyoperator = 0
    function updateScreen(){
        document.getElementById("screen").innerText = screen

    }
    function numberClick(number){
        if (state === "s1"){
            screen = number.toString()
            state = "s2"
        }
        else if (state === "s2"){
            if(screen.length < 9){
            screen = screen + number.toString() 
            }
            
        }
        ///กดเลขหลังกดoperator (second operand)
        else if(state === "s3"){
            console.log("s3")
            operatorDefualt()
            screen = number.toString()
            state = "s4"
            secondOperand = Number(screen)
        }
        else if (state === "s4"){
            if(screen.length < 9){
                screen = screen + number.toString() 
            }
            secondOperand = Number(screen)
        }
        updateScreen()
    }
    function operatorDefualt(){
        document.getElementById("plus").classList.add("btn-green")
        document.getElementById("minus").classList.add("btn-green")
        document.getElementById("plus").classList.remove("btn-yellow")
        document.getElementById("minus").classList.remove("btn-yellow")
    }
    function operatorClick(operator){
        if (state === "s1"){

        }
        //กด operator หลัง first operand
        else if (state === "s2"){
            lastOperator = operator
            firstOperand = Number(screen)
            console.log(firstOperand)
            state = "s3"
        }
        ///ถ้าเปลี่ยนoperator
        else if(state === "s3"){
            lastOperator = operator
            firstOperand = Number(screen)
            console.log(firstOperand)
            state = "s3"
        }
        ///บวกลบหลายอัน
        else if (state === "s4"){
            // lastOperator = operator
            // firstOperand = Number(screen)
            // console.log(firstOperand)
            // state = "s3"
            manyoperator = 1
            equalClick()
        }
        if (lastOperator === '+'){
            operatorDefualt()
            console.log("+")
            document.getElementById("plus").classList.remove("btn-green")
            document.getElementById("plus").classList.add("btn-yellow")
        }
        else if(lastOperator === "-"){
            operatorDefualt()
            console.log("-")
            document.getElementById("minus").classList.remove("btn-green")
            document.getElementById("minus").classList.add("btn-yellow")
        }
        updateScreen()
    }

    function equalClick() {
        console.log("equal called")
        console.log(state)
        /// ไม่มี second operand
        if(state === "s3"){
            secondOperand = firstOperand
            /// ทำครั้งแรก
            if(equal === 0){
                if (lastOperator === "+"){
                result = firstOperand + secondOperand
                screen = result
                console.log("first operand now is",firstOperand)
                console.log("second operand now is",secondOperand)
                equal = 1
                }
                if (lastOperator === "-"){
                    result = firstOperand - secondOperand
                    screen = result
                    console.log("first operand now is",firstOperand)
                    equal = 1
                }
            }
            /// ทำครั้งสอง
            else if(equal === 1){
                secondOperand = result
                if (lastOperator === "+"){
                    result = firstOperand + secondOperand
                    screen = result
                    console.log("first operand now is",firstOperand)
                    console.log("second operand now is",secondOperand)
                    equal = 1
                }
                if (lastOperator === "-"){
                    result = result - secondOperand
                    screen = result
                    console.log("first operand now is",firstOperand)
                    equal = 1
                }
            }
        }
        /// ถ้า บวกลบตามปกติ ที่มี2ตัว
        if(state === "s4"){
            if (manyoperator == 1){
                if (lastOperator === "+"){
                    console.log("many op")
                    console.log("First op is", firstOperand)
                    console.log("Second op is",secondOperand)
                    result = firstOperand + secondOperand
                    state = "s3"
                    screen = result
                    firstOperand = result
                    equal = 0
                    
                }else if (lastOperator === "-"){
                    console.log("many op")
                    console.log("First op is", firstOperand)
                    console.log("Second op is",secondOperand)
                    result = firstOperand - secondOperand
                    state = "s3"
                    screen = result
                    firstOperand = result
                    equal = 0
                    
                }
                
            }
            else{
                if (lastOperator === "+"){
                result = firstOperand + secondOperand
                state = "s2"
                screen = result
                result = firstOperand
                equal = 0
                }
                if (lastOperator === "-"){
                        result = firstOperand - secondOperand
                        state = "s2"
                        screen = result
                        result = firstOperand
                        equal = 0
                }
            }
            
        }
        /// ถ้าไม่เปลี่ยน operator และเลข
        if(state === "s2"){
            if (lastOperator === "+"){
                console.log("+ called")
                console.log(secondOperand)
                result = result + secondOperand
                console.log(result)
                // equal =1
                state = "s2"
                screen = result
            }
            if (lastOperator === "-"){
                    result = result - secondOperand
                    // equal =1
                    state = "s2"
                    screen = result
            }
        }
        
        if (state === "s1"){

        }
        updateScreen()
    }

    function ceClick(){
        screen = '0'
        firstOperand = 0
        secondOperand = 0
        lastOperator = ''
        state = 's1'
        equal = 0
        manyoperator = 0
        updateScreen()
    }
    function checkKeyboard(event) {
        if (event.key === "1") {
            numberClick(1)
        }
        else if (event.key === "2") {
            numberClick(2)
        }
        else if (event.key === "3") {
            numberClick(3)
        }
        else if (event.key === "4") {
            numberClick(4)
        }
        else if (event.key === "5") {
            numberClick(5)
        }
        else if (event.key === "6") {
            numberClick(6)
        }
        else if (event.key === "7") {
            numberClick(7)
        }
        else if (event.key === "8") {
            numberClick(8)
        }
        else if (event.key === "9") {
            numberClick(9)
        }
        else if (event.key === "0") {
            numberClick(0)
        }
        else if (event.key === "+") {
            operatorClick("+")
        }
        else if (event.key === "=") {
            operatorClick("+")
        }else if (event.key === "-") {
            operatorClick("-")
        }
        else if (event.key === "Enter") {
            equalClick()
        }
    }
    document.addEventListener("keydown", checkKeyboard)

    return ( 
        <><div className="mt-3 mb-3 bg-primary-subtle rounded-2 p-1" style={{    
            margin: "auto",
            border: "3px solid black",
            width: "fit-content"
        }}>
            <div className="m-1 border border-black bg-light p-1 text-end" id="screen" style={{minWidth: "220px"}}>0</div>
            
            {/* Memory / CE Row */}
            <div className="d-flex gap-1 mb-2">
                <button className="btn btn-success flex-fill" disabled>MC</button>
                <button className="btn btn-success flex-fill" disabled>MR</button>
                <button className="btn btn-success flex-fill" disabled>M+</button>
                <button className="btn btn-success flex-fill" disabled>M−</button>
                <button className="btn btn-danger flex-fill" onClick={ceClick}>CE</button>
            </div>

            {/* Number Rows */}
            <div className="d-flex gap-1 mb-2">
                <button className="btn btn-primary flex-fill" onClick={() => numberClick(7)}>7</button>
                <button className="btn btn-primary flex-fill" onClick={() => numberClick(8)}>8</button>
                <button className="btn btn-primary flex-fill" onClick={() => numberClick(9)}>9</button>
                <button className="btn btn-success flex-fill" disabled>÷</button>
                <button className="btn btn-success flex-fill" disabled>√</button>
            </div>

            <div className="d-flex gap-1 mb-2">
                <button className="btn btn-primary flex-fill" onClick={() => numberClick(4)}>4</button>
                <button className="btn btn-primary flex-fill" onClick={() => numberClick(5)}>5</button>
                <button className="btn btn-primary flex-fill" onClick={() => numberClick(6)}>6</button>
                <button className="btn btn-success flex-fill" disabled>×</button>
                <button className="btn btn-success flex-fill" disabled>%</button>
            </div>

            <div className="d-flex gap-1 mb-2">
                <button className="btn btn-primary flex-fill" onClick={() => numberClick(1)}>1</button>
                <button className="btn btn-primary flex-fill" onClick={() => numberClick(2)}>2</button>
                <button className="btn btn-primary flex-fill" onClick={() => numberClick(3)}>3</button>
                <button className="btn btn-success flex-fill" id="minus" onClick={() => operatorClick("-")}>−</button>
                <button className="btn btn-success flex-fill" disabled>1/x</button>
            </div>

            <div className="d-flex gap-1">
                <button className="btn btn-primary flex-fill" onClick={() => numberClick(0)}>0</button>
                <button className="btn btn-primary flex-fill" disabled>.</button>
                <button className="btn btn-primary flex-fill" disabled>±</button>
                <button className="btn btn-success flex-fill" id="plus" onClick={() => operatorClick("+")}>+</button>
                <button className="btn btn-success flex-fill" onClick={equalClick}>=</button>
            </div>
        </div>

                
        
    </> );
}
 
export default Calculator;