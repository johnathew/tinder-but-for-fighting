import "./ProfileTwoInfo.css";

const ProfileTwoInfo = (props) => {


  return (
    <div className="profile_two">
      <ul className="two_info">
        <br></br>
        <h1>
          Name: <br></br>
          {props.name}
        </h1>
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
      <img
        src={`${process.env.PUBLIC_URL}/baboon.jpeg`}
        alt="monke"
        className="profile_one_img"
      />
    </div>
  );
};

export default ProfileTwoInfo;
