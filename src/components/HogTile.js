function HogTile({ name, image }) {
  return (
    <div className="pigTile">
      <h2>{name}</h2>
      <img className="ui grid container" src={image} alt="hog image"></img>
    </div>
  );
}

export default HogTile;
