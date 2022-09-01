import "./Profiles.css";
import ProfileInfo from "./ProfileInfo";
import { useState } from "react";
import Card from "./UI/Card.js";
import SwipeableViews from "react-swipeable-views";

const Profiles = (props) => {
  // const [profile, setProfile] = useState(1);

  const styles = {
    slide: {
      padding: 15,
    },
  };

  return (
    <Card className="profiles">
      <ProfileInfo
        name={props.bio[0].name}
        age={props.bio[0].age}
        gender={props.bio[0].gender}
        height={props.bio[0].height}
        weight={props.bio[0].weight}
        reach={props.bio[0].reach}
        image={props.bio[0].image}
      />
      <SwipeableViews enableMouseEvents>
        {props.bio.map((bio) => (
          <div style={Object.assign({}, styles.slide)}>
            <ProfileInfo
              name={bio.name}
              age={bio.age}
              gender={bio.gender}
              height={bio.height}
              weight={bio.weight}
              reach={bio.reach}
              image={bio.image}
            />
          </div>
        ))}{" "}
      </SwipeableViews>
    </Card>
  );
};

export default Profiles;
