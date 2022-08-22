import Profiles from "./components/Profiles";
import Header from "./components/UI/Header";

function App() {
  const fighterData = [
    {
      age: "27",
      name: "Johnathew",
      gender: "Male",
      height: "5'9\"",
      weight: "170lbs",
      reach: "65in",
    },
    {
      age: "30",
      name: "Xander",
      gender: "Male",
      height: "5'3\"",
      weight: "180lbs",
      reach: "30in",
    },
    {
      age: "50",
      name: "Phil",
      gender: "Male",
      height: "6'2\"",
      weight: "250lbs",
      reach: "77in",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        <Profiles bio={fighterData} />
      </div>
    </div>
  );
}

export default App;
