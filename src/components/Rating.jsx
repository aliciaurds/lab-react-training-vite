function Rating({children}){
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
