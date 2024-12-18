import React from 'react';
import trainingimage from '/src/assets/trainingimage.png'
import { Link } from 'react-router-dom';
import './training.css';

const Heading = () => {

  return (
    <>
    <div className="content">
    <div className='Mobileheading'>
      <h1>EMPOWERING MINDS WITH ADVANCED TRAINING SOLUTIONS</h1>
    </div>
    
    <div className='image'>
        <img src={trainingimage} alt='training'></img>
      </div>
      <div className='text'>
      <div className='heading'>
      <h1>EMPOWERING MINDS WITH ADVANCED TRAINING SOLUTIONS</h1>
      </div>
      <div className='para'>
      <p>At Ratna Mace IT Solutions, we offer comprehensive training programs tailored to equip professionals with the latest skills in IT and technology. Whether you're looking to enhance your technical expertise, adopt new tools, or stay ahead in your industry, our training solutions are designed to inspire and empower</p>
      </div>
      <div className='button'>
      <Link to='/contact'> <button>Get Started With Training</button></Link>
      </div>
      </div>
      </div>
      <div className='Mobilebutton'>
      <Link to='/contact'> <button>Get Started With Training</button></Link>

      </div>
    </>
  );
};

export default Heading;