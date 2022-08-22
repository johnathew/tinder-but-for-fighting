import "./Profile.css";
import ProfileOneInfo from "./ProfileOneInfo";
import ProfileTwoInfo from "./ProfileTwoInfo";

const Profiles = (props) => {
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
      <ProfileTwoInfo 
      name={props.bio[1].name}
      age={props.bio[1].age}
      gender={props.bio[1].gender}
      height={props.bio[1].height}
      weight={props.bio[1].weight} 
      reach={props.bio[1].reach} />
    </div>
  );
};

export default Profiles;