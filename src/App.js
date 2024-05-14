import Card from "./components/Card";
import Navbar from "./components/Navbar";
import de from "./images/de.png";
import { base_url } from "./constant";

function App() {
  console.log(base_url);

  let data = [
    {
      title: "this is demo",
      price: "this is price",
      desc: "this is desc",
    },
    {
      title: "this is user",
      price: "this is price",
      desc: "this is desc",
    },
    {
      title: "this is ram",
      price: "this is price",
      desc: "this is desc",
    },
    {
      title: "this is bapu",
      price: "this is price",
      desc: "this is desc",
    },
  ];

  return (
    <>
      {/* <h1 style={{ backgroundColor: "black" }}>Hello from App.js</h1> */}
      <Navbar />
      <div className="row col-md-12">
        {data.map((val, index) => {
          return (
            <>
              <div className="col-md-3">
                <Card title={val.title} price={val.price} desc={val.desc} />
              </div>
            </>
          );
        })}
      </div>
      {/* <img src={de} alt="" /> */}
    </>
  );
}

export default App;
