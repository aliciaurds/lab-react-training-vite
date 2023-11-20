function IdCard(props){
    const {lastName, firstName, gender, height, birth, picture} = props;
    return(
        <div>
        <div>
            <img src={picture} alt="profilePic" />
        </div>
        <div>
            <p><strong>First Name:</strong>{firstName}</p>
            <p><strong>Last Name:</strong>{lastName}</p>
            <p><strong>Gender:</strong>{gender}</p>
            <p><strong>Height:</strong>{height}</p>
            <p><strong>Birth:</strong> {birth.toDateString()}</p>
        </div>
        </div>
    )
}
export default IdCard;