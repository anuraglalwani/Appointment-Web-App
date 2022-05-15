import React from 'react'
import { Link } from 'react-router-dom'
function Shorts(props) {
  return (
    <div>
    <hr />
        <h4>Username: {props.username}</h4>
        <h6>Doctor: {props.doctor}</h6>
        <Link to={"/details/"+props.id} className="btn btn-primary">View Details </Link>
        <hr />
    </div>
    
  )
}

export default Shorts