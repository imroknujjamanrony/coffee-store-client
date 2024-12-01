import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <>
      <h1>Hot Cold Coffees:{coffees.length}</h1>
      <div className="grid grid-cols-3">
        {coffees.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
