import HogTile from "./HogTile";

function HogDisplay({ hogs }) {
  const displayHogs = hogs.map((hog) => {
    return <HogTile key={hog.id} name={hog.name} image={hog.image} />;
  });

  return <div className="ui eight wide column">{displayHogs}</div>;
}

export default HogDisplay;
