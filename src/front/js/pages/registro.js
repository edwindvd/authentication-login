import React from "react";
import "../../styles/home.css";

export const Registro = () => {
  return (
    <div className="text-center">
      <h1>REGISTRO</h1>
      <div className="border border-2 m-5 p-5 border-dark bg-light">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control border"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control border"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark border">
              Registro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
