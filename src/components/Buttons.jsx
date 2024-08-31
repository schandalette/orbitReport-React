import styling from "./styling.css";
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {/* Filter buttons for individual sat types */}
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );

      })}
      {/* Button to display all orbits */}
      < button onClick={() => setSat(satData)}> All Orbits</button >
    </div >
  )
}

export default Buttons;