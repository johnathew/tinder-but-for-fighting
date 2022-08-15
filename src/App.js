import Profile from "./components/Profile";

function App() {

  const bio = {
    age: "27",
    name: "Johnathew",
    gender: "Male",
    height: "5'9\"",
    weight: "170lbs",
}

  return <div>Tinder but for fighting 
    <Profile name={bio.name} age={bio.age} gender={bio.gender} height={bio.height} weight={bio.weight}/>
  </div>;
}

export default App;
