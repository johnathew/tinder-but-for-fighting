import "./ProfileTwoInfo.css";

const ProfileTwoInfo = (props) => {
  return (
    <div>
      <div className="profile_two">
        <img
          src={`${process.env.PUBLIC_URL}/baboon.jpeg`}
          alt="monke"
          className="profile_one_img"
        />
      </div>
      <ul className="two_info">
        <br></br>
        <h1>Name: {props.name}</h1>
        <li>Age: {props.age}</li>
        <br></br>
        <li>Gender: {props.gender}</li>
        <br></br>
        <li>Height: {props.height}</li>
        <br></br>
        <li>Weight: {props.weight}</li>
        <br></br>
        <li>Reach: {props.reach}</li>
      </ul>
    </div>
  );
};

export default ProfileTwoInfo;
