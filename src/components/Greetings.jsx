function Greetings({lang, children}){
    let greeting = "";
    if (lang === "de"){
        greeting = `Hallo ${children}!`;
    } else if (lang === "en"){
        greeting = `Hello ${children}!`;
    } else if (lang === "es"){
        greeting = `Hola ${children}!`;
    } else if (lang === "fr"){
        greeting = `Bonjour ${children}!`;
    } 
    return(
        <div>
            <h3>{greeting}</h3>
        </div>

    )
}
export default Greetings;