import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./styles/List.css";
function List() {
  const [appointment, setAppointment] = useState(null);
  const { id } = useParams();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
 

  function fetchData() {
    axios
      //.get("http://localhost:5000/appointment/"+id)
      .get("https://appointment-webapp.herokuapp.com/appointment/" + id)
      .then((response) => {
        console.log(response.data.data);
        setLoading(false);
        setAppointment(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        setAppointment(null);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleDelete(id) {
    console.log(id);
    axios
      // .delete(`http://localhost:5000/appointment/${id}`)
      .delete(`https://appointment-webapp.herokuapp.com/appointment/${id}`)
      .then((response) => {
        console.log(response.data);
         
        navigate("/allAppointments");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="list">
     
      <div className="list-header">
        <h2> Appointments Details </h2>
        <Link to="/" className="btn btn-secondary custom-btn">
          Home
        </Link>
      </div>

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="card card-custom">
          <div className="card-body" id={appointment?._id}>
            <h4 className="card-title">Username: {appointment?.username}</h4>
            <h5 className="card-title">Doctor: {appointment?.doctor}</h5>
            <h6 className="card-text">
              Description: {appointment?.description}
            </h6>

            <h5>Date: {appointment?.date}</h5>
            <h5>Time: {appointment?.time}</h5>

            <div className="list-btns">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(appointment?._id)}
              >
                Delete
              </button>
              <Link
                className="btn btn-primary link-btn"
                to={`/modify/${appointment?._id}`}
              >
                {" "}
                Modify
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
