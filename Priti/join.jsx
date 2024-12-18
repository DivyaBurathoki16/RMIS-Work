
import {Link} from 'react-router-dom'
import React from "react";
import './main.css'
const Main=()=>{
    return(
    <div className="jointeam">
      <div className="heading"><p>JOIN OUR TEAM OF INNOVATORS!</p></div>
      <div className="bodypart">
        <p>We are looking for talented individuals who are passionate about technology and ready to make an impact.Discover exciting carrer opportunities and grow with us</p>
        <div className="image">
          <img src="Home Page Join Team 1.png" alt="Innovation Img"/>
        </div>
      </div>
      <div className="btn">
      <Link to="/about"><button className='learnmore'>Learn more</button></Link>
      </div>
    </div>
    );
}
export default Main


