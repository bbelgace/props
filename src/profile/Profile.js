import React from "react";

const Profile = (props) => {
  const handleClick = () => {
    props.showName(props.Donnee.fullName);
  };
  console.log(props);
  return (
    <div className="card-group" style={style}>
      <div className="card">
        {props.children}
        <div className="card-body">
          <h1 className="card card-title" onClick={handleClick}>
            {props.Donnee.fullName}
          </h1>
          <h3 className="card-text">{props.Donnee.Bio}</h3>
          <h3 className="card-text">{props.Donnee.profession}</h3>
        </div>
      </div>
    </div>
  );
};
const style = { width: 500, margin: 200 };
export default Profile;
