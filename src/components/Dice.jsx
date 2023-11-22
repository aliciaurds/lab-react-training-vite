import { useState } from "react"
import emptyDice from "../assets/images/dice-empty.png"
import oneDice from "../assets/images/dice1.png"
import twoDice from "../assets/images/dice2.png"
import threeDice from "../assets/images/dice3.png"
import fourDice from "../assets/images/dice4.png"
import fiveDice from "../assets/images/dice5.png"
import sixDice from "../assets/images/dice6.png"

function Dice() {
    const [clickDice, setClickedDice] = useState(false)
    const [randomDice, setRandomDice] = useState(0)
    const handleClick = () => {
        setClickedDice(true)
        //6 posibilidades en cada dado
        setRandomDice(Math.floor(Math.random() * 6) + 1)
    }
    const diceStyles = {
        width: "150px",
    }
    const dicePic = [oneDice, twoDice, threeDice, fourDice, fiveDice, sixDice]
    console.log(randomDice);
    //si el dado esta clicado devolvemos el randomDice
    if (clickDice === true) {
        //indexamos con randomDice para acceder al elemento del array (-1 porque el indexado comienza en 0)
        return <img src={dicePic[randomDice-1]} alt="dice" style={diceStyles} onClick={handleClick} />
        
    //si no, devolvemos el emptyDice
    } else {
        return <img src={emptyDice} alt="dice" style={diceStyles} onClick={handleClick}/>
    }
   
//! Lo entiendo pero hay que darle una vuelta porque es un poco lio
//   return (
//     <div>
              
        
//     </div>
//   )
}

export default Dice
//Aqui abajo la locura que estaba haciendo:
// const dicePic = [oneDice, twoDice, threeDice, fourDice, fiveDice, sixDice]
// const randomDice = Math.floor(Math.random() * dicePic.length+1)
// console.log("dado random", randomDice);
// if (clickDice === true && randomDice === 1) {
//     return <img src={oneDice} alt="dice" style={diceStyles} onClick={handleClick} />
// } else if (clickDice === true && randomDice === 2) {
//     return <img src={twoDice} alt="dice" style={diceStyles} onClick={handleClick}/>
// } else if (clickDice === true && randomDice === 3) {
//     return <img src={threeDice} alt="dice" style={diceStyles} onClick={handleClick}/>
// }else if (clickDice === true && randomDice === 4) {
//     return <img src={fourDice} alt="dice" style={diceStyles} onClick={handleClick}/>
// }else if (clickDice === true && randomDice === 5){
//     return <img src={fiveDice} alt="dice" style={diceStyles} onClick={handleClick}/>
// }else if (clickDice === true && randomDice === 6) {
//     return <img src={sixDice} alt="dice" style={diceStyles} onClick={handleClick}/>
// }else {
//     return <img src={emptyDice} alt="dice" style={diceStyles} onClick={handleClick}/>
// }