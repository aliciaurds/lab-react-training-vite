import { useState } from "react"
function Carousel({images}) {
    const [imgIndex, setImgIndex] = useState(0)
    const handleLeftClick =() => {
        //si es la primera imagen del array entonces al hacer click a la izquierda, nos muestra la ultima imagen del array
        if (imgIndex === 0) {
            setImgIndex(images.length - 1)        
        } else {
            //si no es la primera, entonces le restamos una (decrece)
            setImgIndex(imgIndex - 1)
        }
    }
    const handleRightClick = () => {
        //si es la ultima imagen del array entonces al hacer click a la derecha, nos muestra la primera imagen del array
        if (imgIndex === images.length - 1) {
            setImgIndex(0)
        } else {
            //si no es la última, entonces le sumamos una (aumenta)
            setImgIndex(imgIndex + 1)
        }
    }
    const imgStyles = {
        margin: "10px",
    }
  return (
    <div>
        <button onClick={handleLeftClick}>Left</button>
        <img style= {imgStyles} src={images[imgIndex]} alt="carouselImgs" />
        
        <button onClick={handleRightClick}>Right</button>
    </div>
  )
}

export default Carousel