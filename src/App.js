import Profiles from "./components/Profile/Profiles";
import Header from "./components/UI/Header";
import { useState } from "react";
import NewProfile from "./components/Profile/NewProfile/NewProfile";

const INITIAL_FIGHTER_DATA = [
  {
    age: "18",
    name: "Johnathew",
    gender: "Male",
    height: "5'9\"",
    weight: "145lbs",
    reach: "65in",
    image: `${process.env.PUBLIC_URL}/johnathew.png`,
  },
  {
    age: "30",
    name: "Danny",
    gender: "Male",
    height: "4'10\"",
    weight: "150lbs",
    reach: "30in",
    image: `${process.env.PUBLIC_URL}/danny.jpeg`,
  },
  {
    age: "71",
    name: "Phil",
    gender: "Male",
    height: "6'2\"",
    weight: "250lbs",
    reach: "77in",
    image: `${process.env.PUBLIC_URL}/Dr.Phil2013.jpg`,
  },
  {
    age: "32",
    name: "Charlie",
    gender: "Male",
    height: "5'8\"",
    weight: "170lbs",
    reach: "60in",
    image: `${process.env.PUBLIC_URL}/charlie.jpg`,
  },
];

function App() {
  const [fighterData, setFighterData] = useState(INITIAL_FIGHTER_DATA);

  return (
    <div>
      <Header />
      <NewProfile />
      <div>
        <Profiles bio={fighterData} />
      </div>
    </div>
  );
}

export default App;
