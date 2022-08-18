import Profile from "./components/Profile";
import Header from "./components/Header";

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
     <Header />
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
