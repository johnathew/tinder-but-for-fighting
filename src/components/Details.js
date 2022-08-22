import "./Details.css";

const Details = (props) => {
  return (
    <div className="details">
      <ul className="details_list">
        <li>Age</li>
        <br></br>
        <li>Gender</li>
        <br></br>
        <li> Height</li>
        <br></br>
        <li>Weight</li>
        <br></br>
        <li>Reach</li>
      </ul>
    </div>
  );
};

export default Details;
