import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams,Link } from "react-router-dom";

import "./styles/Modify.css";
function Modify() {
  const { id } = useParams();
  let navigate = useNavigate();
   
  const [state, setState] = useState({
    date: "",
    time: "",
  });
  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(state);
    axios
     // .patch("http://localhost:5000/appointment/" + id, state)
      .patch("https://appointment-webapp.herokuapp.com/appointment/"+id, state)
      
      .then(function (response) {
        console.log(response.data);
        alert(response.data);
        navigate("/details/"+id);
      })
      .catch(function (error) {
        console.log(error);
      });

    setState({
      date: "",
      time: "",
    });
  }
  return (
    <div className="modify">
    <div className="home-header">
        <h2>Modify Below</h2>
        <Link to="/allAppointments" className="btn btn-secondary custom-btn">
           Appointments List
        </Link>
      </div>

      <div className="card custom-card-body" style={{ width: "18rem", alignItems: "center" }}>
        <div className="card-body ">
          
          <form onSubmit={handleSubmit}>
            <label for="date">Select Date </label>
            <input
              required
              className="date-input"
              type="date"
              id="date"
              name="date"
              value={state.date}
              onChange={handleChange}
            />

            <label for="time">Select a time </label>
            <input
              required
              type="time"
              id="time"
              name="time"
              value={state.time}
              onChange={handleChange}
            />

            <button className="btn btn-primary modify-btn" type="submit">
              Modify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modify;
