import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>HOME</h1>
      <Link className="btn btn-dark m-4 border w-25" to="/login">
        LOGIN
      </Link>
      <Link className="btn btn-dark m-4 border w-25" to="/registro">
        REGISTRO
      </Link>
    </div>
  );
};
