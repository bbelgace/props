import React from "react";

const Profile = (props) => {
  return (
    <div className="card-group" style={style}>
      <div className="card">
        <img src="./image.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card card-title">{props.Donnee.fullName}</h1>
          <h3 className="card-text">{props.Donnee.Bio}</h3>
          <h3 className="card-text">{props.Donnee.profession}</h3>
        </div>
      </div>
    </div>
  );
};
const style = { width: 500, margin: 200 };
export default Profile;
