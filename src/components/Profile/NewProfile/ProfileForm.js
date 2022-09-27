import { useState } from "react";

const ProfileForm = () => {
  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAge: "",
    enteredGender: "",
    enteredFeet: "",
    enteredInches: "",
    enteredWeight: "",
    enteredReach: "",
  });

  const ageChangeHandler = (event) => {
    setUserInput((prevValue) => {
      return { ...prevValue, enteredAge: event.target.value };
    });
  };
  const nameChangeHandler = (event) => {
    setUserInput((prevValue) => {
      return { ...prevValue, enteredName: event.target.value };
    });
  };

  const genderChangeHandler = (event) => {
    setUserInput((prevValue) => {
      return { ...prevValue, enteredGender: event.target.value };
    });
  };

  const feetChangeHandler = (event) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        enteredFeet: event.target.value,
      };
    });
  };

  const inchChangeHandler = (event) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        enteredInches: event.target.value,
      };
    });
  };

  const weightChangeHandler = (event) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        enteredWeight: event.target.value,
      };
    });
  };
  const reachChangeHandler = (event) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        enteredReach: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInfo = {
      userInput,
    };

    console.log(userInfo);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-profile__controls">
        <div className="new-profile__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
      </div>

      <div className="new-profile__control">
        <label>Age</label>
        <input
          type="number"
          min="18"
          max="65"
          step="1"
          onChange={ageChangeHandler}
        />
      </div>

      <div className="new-profile__control">
        <label for="gender">Male</label>
        <input
          type="radio"
          id="gender"
          name="MorF"
          value="Male"
          onChange={genderChangeHandler}
        />
        <label for="gender">Female </label>
        <input
          type="radio"
          id="gender"
          name="MorF"
          value="Female"
          onChange={genderChangeHandler}
        />
      </div>

      <div className="new-profile__control">
        <label>Height</label>
        <input
          type="number"
          min="1"
          max="10"
          step="1"
          onChange={feetChangeHandler}
        />
        <label>Feet</label>
        <input
          type="number"
          min="1"
          max="11"
          step="1"
          onChange={inchChangeHandler}
        />
        <label>Inches</label>
      </div>

      <div className="new-profile__control">
        <label>Weight {`(lbs)`}</label>
        <input
          type="number"
          min="0"
          max="500"
          step="1"
          onChange={weightChangeHandler}
        />
      </div>

      <div className="new-profile__control">
        <label>Reach {`(in)`}</label>
        <input
          type="number"
          min="0"
          max="200"
          step="1"
          onChange={reachChangeHandler}
        />
      </div>

      <div className="new-profile__actions">
        <button type="submit">Add profile</button>
      </div>
    </form>
  );
};

export default ProfileForm;
