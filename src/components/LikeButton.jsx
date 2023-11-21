import { useState } from "react";
function LikeButton() {
    const colors =  ["purple", "blue", "green", "yellow", "orange", "red"]
    const [likeCounter, setLikeCounter] = useState(0);
    const [colorIndx, setColor] = useState(0);
    console.log(likeCounter, setLikeCounter);
    const handleIncrement = () => {
        console.log("clicked");
        setLikeCounter(likeCounter + 1);
        // const randomColor = Math.floor(Math.random() * colors.length);
        setColor(colorIndx+1);
    }
    const text = likeCounter === 1? "Like" : "Likes";
    const backGColor = colors[colorIndx];
    const cardStyles = {
        backgroundColor: backGColor,
        color: "white",
        padding: "10px",
    }
    
  return (
    <div style={cardStyles}>
        <h1>{likeCounter} {text}</h1>
        <button onClick={handleIncrement}>Increase</button>
    </div>
  )
}

export default LikeButton;