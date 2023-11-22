import React, { useState } from 'react';
function ClickablePicture({img, imgClicked}) {
    //usar useState hook para el click, donde el valor inicial será falso, en este paso porque se da por hecho que la imagen a visualizar será la previa a una vez clickemos
    const [clicked, setClicked] = useState(false);
    //neceistamos un event handler para el evento de clickar
    const handleClick = () => {
        setClicked(true);
        
    }
    const handleDoubleClick = () => {
        setClicked(false);
    }
    const imgStyle = {
        margin: '10px',
        
        width: '200px'
    }


  return (
    <div>
        {/* si la imagen se clicka (osea si es true) entonces aparece la imagen clicada, sino la imagen original */}
        <img style= {imgStyle} src={clicked === true ? imgClicked : img} alt="imgclick" onClick={handleClick} onDoubleClick={handleDoubleClick}/>
    </div>
  )
}


export default ClickablePicture;
//mirar mas doc aqui:
//  https://peaku.co/es/preguntas/101486-%C2%BFcomo-cambiar-condicionalmente-la-visibilidad-con-react
