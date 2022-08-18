import Profile from "./components/Profile";
import "./App.css";

function App() {
  const bio = {
    age: "27",
    name: "Johnathew",
    gender: "Male",
    height: "5'9\"",
    weight: "170lbs",
    reach: "65in",
  };

  return (
    <div>
      Tinder but for fighting
      <div className="main__profile">
        <Profile />
      </div>
    </div>
  );
}

export default App;
