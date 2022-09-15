import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <div className="hola">
      {store.token && store.token != "" && store.token != undefined ? (
        navigate("/private")
      ) : (
        <div className="text-center mt-5">
          <h1>BRRR</h1>
          <Link className="btn btn-dark m-4 border w-25" to="/login">
            LOGIN
          </Link>
          <Link className="btn btn-dark m-4 border w-25" to="/registro">
            REGISTRO
          </Link>
        </div>
      )}
    </div>
  );
};
