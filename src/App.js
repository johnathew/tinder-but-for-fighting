import Profile from "./components/Profile";

function App() {

  const bio = {
    age: "27",
    name: "Johnathew",
    gender: "Male",
    height: "5'9\"",
    weight: "170lbs",
    reach: "65in",
}

  return <div>Tinder but for fighting 
    <Profile name={bio.name} age={bio.age} gender={bio.gender} height={bio.height} weight={bio.weight} reach={bio.reach}/>
  </div>;
}

export default App;
