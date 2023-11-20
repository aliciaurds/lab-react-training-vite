import Rating from "./Rating.jsx"
function DriverCard({name, rating, img, car}){
    const driverStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '100%',
        borderRadius: '25px',
        padding: '10px',
        margin: '20px',
        backgroundColor: "blue",
        color: "white",
    }
    return(
        <div style={driverStyles}>
            <img src={img} alt="picProfile" style= {{width:"100px", height: "100px", borderRadius:"50%", objectFit:"cover"}}/>
            <h3>{name}</h3>
            <Rating>{rating}</Rating>
            <p>{car.model} - {car.licensePlate}</p>

        </div>
    )
}
export default DriverCard;