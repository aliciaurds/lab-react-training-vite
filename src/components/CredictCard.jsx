import VisaImg from "../assets/images/visa.png"
import MasterCarImg from "../assets/images/master-card.svg"
function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    const lastFourDigits = number.slice(-4);
    let cardImage;
    if(type === "Visa"){
        cardImage = VisaImg;
    }else if(type === "Master Card"){
        cardImage = MasterCarImg;
    }
    const cardStyles = {
        backgroundColor: bgColor,
        color: color,
        width: "400px",
        padding: "20px",
        borderRadius: "10px",
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "20px",
        
    }
    return(
        <div style={cardStyles}>
            <img src={cardImage} alt={type} style={{width: "100px"}}/>
            <p>···· ···· ···· {lastFourDigits}</p>         
            <p>Expires: {expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
            
        </div>
    )
}
export default CreditCard;