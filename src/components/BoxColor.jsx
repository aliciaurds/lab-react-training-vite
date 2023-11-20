function BoxColor({ r, g, b }) {
  const inlineStyles = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: "400px",
    height: "100px",
    border: "1px solid black",
    margin: "10px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'   
  };
  let textInside = `rgb(${r}, ${g}, ${b})`;
  return (
  <div style={inlineStyles}>{textInside}</div>
  )
}
export default BoxColor;
