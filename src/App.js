import Card from "./components/Card";
import Navbar from "./components/Navbar";
import de from "./images/de.png";

function App() {
  return (
    <>
      {/* <h1 style={{ backgroundColor: "black" }}>Hello from App.js</h1> */}
      <Navbar />
      <div className="row col-md-12">
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
      </div>
      <img src={de} alt="" />
    </>
  );
}

export default App;
