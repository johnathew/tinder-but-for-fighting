import "./ProfileInfo.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className="profile_main">
        <div className="profile_one">
          <img
            src={props.image}
            alt="profile_one"
            className="profile_one_img"
          />
        </div>
        <ul className="one_info">
          <br></br>
          <h1>Name: <br></br>{props.name}</h1>
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
    </div>
  );
};

export default ProfileInfo;
