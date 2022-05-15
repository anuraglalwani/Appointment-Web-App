import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Shorts from "./Shorts";
import { Link } from "react-router-dom";

import "./styles/Appointments.css"

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  function fetchData() {
    axios
      .get("http://localhost:5000/")
      //.get("https://appointment-webapp.herokuapp.com/")
      .then((response) => {
        console.log(response.data.data);
        setAppointments(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        setAppointments([]);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="appointments">
      <div className="appointments-header">
        <h2> All Appointments </h2>
        <Link to="/" className="btn btn-secondary custom-btn">
          Home
        </Link>
      </div>
      {appointments?.map((appointment) => {
        return (
          <Shorts
            key={appointment._id}
            id={appointment._id}
            username={appointment.username}
            doctor={appointment.doctor}
          />
        );
      })}

      
    </div>
  );
}

export default Appointments;
