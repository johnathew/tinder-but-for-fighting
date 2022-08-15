const Profile = (props) => {
  return (
    <div className="profile">
      <h1>{props.name}</h1>
      <ul>
        <li>{props.age}</li>
        <li>{props.gender}</li>
        <li>{props.height}</li>
        <li>{props.weight}</li>
      </ul>
      <img src={`${process.env.PUBLIC_URL}/baboon.jpeg`} alt="monke" />
    </div>
  );
};

export default Profile;
