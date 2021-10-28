import React from "react";
import Profile from "./profile/Profile";
import "./App.css";

function App() {
  return (
    <div>
      <Profile
        Donnee={{
          fullName: "Ben Belgacem Sabrine",
          Bio: "Bio : obtenu un diplome supérieur en développemnt systèms informatiques de ISET Gafsa",
          profession: "développeuse",
        }}
      ></Profile>
    </div>
  );
}

export default App;
