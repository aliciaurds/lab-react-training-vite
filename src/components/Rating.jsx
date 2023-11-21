function Rating({children}){
  // const {children} = props.children; lo que pasa internamente
    let roundChildren = Math.round(children);
    let stars;
  if (roundChildren === 0) {
    stars = '☆☆☆☆☆';
  } else if (roundChildren === 1) {
    stars = '★☆☆☆☆';
  } else if (roundChildren === 2) {
    stars = '★★☆☆☆';
  } else if (roundChildren === 3) {
    stars = '★★★☆☆';
  } else if (roundChildren === 4) {
    stars = '★★★★☆';
  } else if (roundChildren >= 5) {
    stars = '★★★★★';
  } 
    return(
        <div>{stars}</div>
    )
}
export default Rating;
//otra solución:
// function Rating(props) {
//   const number = Math.round(props.children);
//   const starRatingUp = "★".repeat(number);
//   const starRatingDown = "☆".repeat(5 - number);
//   return (
//     <div>
//       {starRatingUp}
//       {starRatingDown}
//     </div>
//   );
// }

// export default Rating;