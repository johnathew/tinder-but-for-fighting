import "./Profile.css";
import ProfileOneInfo from "./ProfileOneInfo";
import ProfileTwoInfo from "./ProfileTwoInfo";
import { useState } from "react";

const Profiles = (props) => {
  let [profile, setProfile] = useState(0);

  const rightSwipeHandler = () => {
    setProfile(() => {
      if (profile >= 2) {
        return (profile = 0);
      } else {
        return profile + 1;
      }
    });
  };

  const leftSwipeHandler = () => {
    setProfile(() => {
      if (profile <= 0) {
        return (profile = 2);
      } else {
        return profile - 1;
      }
    });
  };

  return (
    <div className="profile_main">
      <ProfileOneInfo
        name={props.bio[0].name}
        age={props.bio[0].age}
        gender={props.bio[0].gender}
        height={props.bio[0].height}
        weight={props.bio[0].weight}
        reach={props.bio[0].reach}
      />
      <button onClick={leftSwipeHandler}>Swipe Left</button>
      <ProfileTwoInfo
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
