import Information from "./Information";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile_main">
      <div className="profile_one">
        <h1>{props.name}</h1>
        <img
          src={`${process.env.PUBLIC_URL}/baboon.jpeg`}
          alt="monke"
          className="profile_one_img"
        />
      </div>
      <Information />
      {/* <div className="profile_info__list">
        <ul>
          <li>{props.age}</li>
          <li>{props.gender}</li>
          <li> {props.height}</li>
          <li>{props.weight}</li>
          <li>{props.reach}</li>
        </ul>
      </div> */}
      <div className="profile_one">
        <h1>{props.name}</h1>
        <img
          src={`${process.env.PUBLIC_URL}/baboon.jpeg`}
          alt="monke"
          className="profile_one_img"
        />
      </div>
      
    </div>
  );
};

export default Profile;
