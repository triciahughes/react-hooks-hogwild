function HogData({ name, image }) {
  return (
    <div className="pigTile">
      <h2>{name}</h2>
      <img src={image} alt="hog image"></img>
    </div>
  );
}

export default HogData;
