import "./Profile.css";

const Profile = (props) => {
  return (
    <div>
      <div className="profile_one">
        <h1>{props.name}</h1>
        <img
          src={`${process.env.PUBLIC_URL}/baboon.jpeg`}
          alt="monke"
          className="profile_one_img"
        />
      </div>
      <div className="profile_info__list">
        <ul>
          <li>Age: {props.age}</li>
          <li>Gender: {props.gender}</li>
          <li> Height: {props.height}</li>
          <li>Weight: {props.weight}</li>
          <li>Reach: {props.reach}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
