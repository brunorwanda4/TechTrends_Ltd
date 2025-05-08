import React from "react";
import { homeImage } from "../images";

const Home = () => {
  return (
    <div className=" space-y-4 flex min-h-screen flex-col justify-center items-center">
      <h1 className=" font-bold text-4xl">Welcome to tech trend Ltd</h1>
      <div className=" md:px-96 space-y-4">
        <p className=" text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          alias ea dicta voluptates corporis in tenetur eligendi quis obcaecati
          maxime hic atque. Ipsam illum quasi autem, vero repudiandae ducimus
          tempora.
        </p>
      <img src={homeImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
