function Random({min, max}){
    let randomNum = Math.floor(Math.random()*(max - min + 1)) + min;
    // let randomNUm =  Math.ceil(Math.random()*(max - min )) + min; => otra forma
    let text = "";
    //! Necesito que el numero esté entre min y max. y sabiendo que el math random me da un numero entre 0 y 1 vamos a decir que: 
    //*max - min me calcula el rango de acción por así decirlo, si el max es 10 y el min es 1 tendría un rango de 9
    //* se agrega 1 para asegurarnos que el rango incluya tanto el min como el max, asi en vez de 9 seria 10
    //* + min => luego se suma el valor min para que comience desde este valor en lugar de comenxar desde cero
    //? Por si vuelvo a necesitar la explicación: https://stackoverflow.com/questions/62981108/how-does-math-floormath-random-max-min-1-min-work-in-javascript
    text = `Random value between ${min} and ${max} is ${randomNum}`;
    return(
        <div>
            <p>{text}</p>
        </div>

    )
}
export default Random;