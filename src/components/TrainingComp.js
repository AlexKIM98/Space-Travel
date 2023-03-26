import React from 'react'
import './TrainingComp.css'

import { Link } from 'react-router-dom'

import Pod from '../assests/astronaut.jpg'
import Moon from '../assests/world.jpg'

const TrainingComp = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>
Be part of the training and received a certification as an astronaut. You will learn everything you need to know and in case of an alien invasion you will be able to save your family.</p>
<Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Pod} className='img' alt='Astronaut' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Moon} className='img' alt='' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default TrainingComp