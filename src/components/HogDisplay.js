import HogData from "./HogData";

function HogDisplay({ hogs }) {
  const displayHogs = hogs.map((hog) => {
    //console.log(hog.name, hog.image);
    return <HogData name={hog.name} image={hog.image} />;
  });

  return <div>{displayHogs}</div>;
}

export default HogDisplay;
