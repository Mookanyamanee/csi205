import { useState } from "react";
import { useEffect } from "react";
const Animation = () => {
        const fieldWidth = 800;
        const fieldHeight = 400;
        const ballSize = 150;
        const vx = 5;
        const vy = 5;

        const [x, setX] = useState(0);
        const [y, setY] = useState(0);
        const [moveRight, setMoveRight] = useState(true);
        const [moveDown, setMoveDown] = useState(true);
        const [running, setRunning] = useState(false);

        const runClick = () => setRunning(!running);
            
        function changeIMG(img) {
            const buttons = document.querySelectorAll(".anim-control button")
            for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.remove("active-btn")
            }
            document.getElementById(img).classList.add("active-btn")
            if (img == "basketball"){
                document.getElementById("ball").style.backgroundImage = "url(./img/basketball.png)"
            }
            if (img == "volleyball"){
                document.getElementById("ball").style.backgroundImage = "url(./img/volleyball.webp)"
            }
            if (img == "none"){
                document.getElementById("ball").style.backgroundImage = "none"
            }
            if (img == "football"){
                document.getElementById("ball").style.backgroundImage = "url(./img/football.jpg)"
            }
            if (img == "cartoon"){
                document.getElementById("ball").style.backgroundImage = "url(./img/cartoon.jpg)"
            }
            if (img == "logo"){
                document.getElementById("ball").style.backgroundImage = "url(./img/logo.jpg)"
            }
            if (img == "human"){
                document.getElementById("ball").style.backgroundImage = "url(./img/human.jpg)"
            }
            
        }
        useEffect(() => {
            const interval = setInterval(() => {
            if (!running) return;

            setX(prevX => {
                let newX = prevX + (moveRight ? vx : -vx);
                if (newX >= fieldWidth - ballSize) {
                setMoveRight(false);
                newX = fieldWidth - ballSize;
                }
                if (newX <= 0) {
                setMoveRight(true);
                newX = 0;
                }
                return newX;
            });

            setY(prevY => {
                let newY = prevY + (moveDown ? vy : -vy);
                if (newY >= fieldHeight - ballSize) {
                setMoveDown(false);
                newY = fieldHeight - ballSize;
                }
                if (newY <= 0) {
                setMoveDown(true);
                newY = 0;
                }
                return newY;
            });
            }, 25);

        return () => clearInterval(interval);}, [running, moveRight, moveDown]);

    return ( <>
        <nav className="mt-3"style={{ backgroundColor: "#0d6efd", color: "white", padding: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: "bold", color: "white" }}>MySite</div>

                <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>About</a></li>
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
                </ul>
            </div>
        </nav>

        <div className="mb-3" style={{border : "1px solid black", padding : "10px", margin : "auto", width : "fit-content", borderRadius : "10px"}}>
            <div style={{
            width: fieldWidth,
            height: fieldHeight,
            border: "1px solid black",
            borderRadius: "10px",
            margin: "1rem auto",
            backgroundImage:
                'url("./img/boen-sports-flooring-ash-boen-actiflex-stadium-engineered-sports-flooring-32575256101062.webp")',
            backgroundSize: "cover",
            position: "relative",}} id="field">
                <div style={{
                        position: "relative",
                        left: `${x}px`,
                        top: `${y}px`,
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        border: "1px solid black",
                        backgroundColor: "lightblue",
                        backgroundSize: "115% 115%",
                        backgroundPosition: "center",
                        backgroundRepeat: "cover",
                        animation: "spin 3s linear infinite",
                        animationPlayState: "paused",
                    }} id="ball"></div>
            </div>
        
            <div className = "d-flex justify-content-between">
                <button className="btn btn-success" onClick={runClick}id="run"><i className="bi bi-play-circle"></i> RUN</button>
                <button className="btn btn-secondary" onClick={()=>changeIMG('none')} id="none">NONE</button>
                <button className="btn btn-outline-primary" onClick={()=>changeIMG('basketball')} id="basketball">BASKETBALL</button>
                <button className="btn btn-outline-primary" onClick={()=>changeIMG('volleyball')} id="volleyball">VOLLEYBALL</button>
                <button className="btn btn-outline-primary " onClick={()=>changeIMG('football')} id="football">FOOTBALL</button>
                <button className="btn btn-outline-primary"onClick={()=>changeIMG('human')} id="human">HUMAN</button>
                <button className="btn btn-outline-primary"onClick={()=>changeIMG('cartoon')} id="cartoon">CARTOON</button>
                <button className="btn btn-outline-primary"onClick={()=>changeIMG('logo')} id="logo">LOGO</button>
            </div>
        </div>
    </> );
}
 
export default Animation;