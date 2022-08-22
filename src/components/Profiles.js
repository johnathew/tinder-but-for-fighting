// import Details from "./Details";
import "./Profile.css";
import ProfileOneInfo from "./ProfileOneInfo";
import ProfileTwoInfo from "./ProfileTwoInfo";

const Profiles = (props) => {
  return (
    <div className="profile_main">
      <ProfileOneInfo
        name={props.bio[0].name}
        age={props.bio[0].age}
        height={props.bio[0].height}
        weight={props.bio[0].weight} 
        reach={props.bio[0].reach} 
      />
      {/* <Details /> */}
      <ProfileTwoInfo 
      name={props.bio[1].name}
      age={props.bio[1].age}
      height={props.bio[1].height}
      weight={props.bio[1].weight} 
      reach={props.bio[1].reach} />
    </div>
  );
};

export default Profiles;
