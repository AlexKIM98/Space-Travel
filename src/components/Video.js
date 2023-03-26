import React from 'react'
import { Link } from 'react-router-dom';
import './Video.css';
import worldVideo from '../assests/production ID_4478322.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={worldVideo} type='video/mp4'/>
        </video>

    <div className='content'>
        <h1>Explore the universe</h1>    
        <p>The stars are calling us</p>
    
    <div>
        <Link to='/training' className='btn'>Training</Link>
        <Link to='/contact' className='btn btn-light'>Launch</Link>
    </div>     
    </div>
    </div>
  )
}

export default Video