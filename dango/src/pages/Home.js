import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleButton, RegularButton } from "../components/Buttons";

const Home = () => {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <GoogleButton />
      <RegularButton buttonText={"Test"} propWidth={100} />
    </div>
  );
};

export default Home;
