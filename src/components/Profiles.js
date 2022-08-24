import "./Profiles.css";
import ProfileInfo from "./ProfileInfo";
import { useState } from "react";

const Profiles = (props) => {
  let [profile, setProfile] = useState(1); // is it ok to use let here? 

  const rightSwipeHandler = () => {
    setProfile(() => {
      if (profile >= 3) {
        return (profile = 1);
      } else {
        return profile + 1;
      }
    });
  };

  const leftSwipeHandler = () => {
    setProfile(() => {
      if (profile <= 1) {
        return (profile = 3);
      } else {
        return profile - 1;
      }
    });
  };

  return (
    <div className="profile_main">
      <ProfileInfo
        name={props.bio[0].name}
        age={props.bio[0].age}
        gender={props.bio[0].gender}
        height={props.bio[0].height}
        weight={props.bio[0].weight}
        reach={props.bio[0].reach}
      />
      <button onClick={leftSwipeHandler}>Swipe Left</button>
      <ProfileInfo
        name={props.bio[profile].name}
        age={props.bio[profile].age}
        gender={props.bio[profile].gender}
        height={props.bio[profile].height}
        weight={props.bio[profile].weight}
        reach={props.bio[profile].reach}
      />
      <button onClick={rightSwipeHandler}>Swipe Right</button>
    </div>
  );
};

export default Profiles;
