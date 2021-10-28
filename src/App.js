import React from "react";
import Profile from "./profile/Profile";
import "./App.css";
import image from "./image.jpg";
function App() {
  const showAlert = (name) => alert(name);
  return (
    <div>
      <Profile
        Donnee={{
          fullName: "Ben Belgacem Sabrine",
          Bio: "Bio : obtenu un diplome supérieur en développemnt systèms informatiques de ISET Gafsa",
          profession: "développeuse",
        }}
        showName={showAlert}
      >
        <img src={image} alt="cbvccgc" />
      </Profile>
    </div>
  );
}

export default App;
