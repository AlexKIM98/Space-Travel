import React from 'react'
import './Footer.css'
import { FaInstagram, FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                <FaSearchLocation size={20} style={{color: '#fff', marginRight:'2rem'}}/>
                 <div>
                    <p>Emilio Lamarca 123</p>
                    <h4>Buenos Aires, Argentina</h4>
                    </div>
                </div>
                <div className='phone' >
                    <h4> <FaPhone size={20} style={{color: '#fff', marginRight:'2rem'}}/>+54 9 11-1111-1111</h4>
                </div>
                <div className='email'>
                    <h4> <FaMailBulk size={20} style={{color: '#fff', marginRight:'2rem'}} /> alexkim@gmail.com</h4>
                </div>
            </div>


            <div className='right'>
                <h4>About the compamy</h4>
                <p>The objective of our company is to be able to provide that once in a lifetime opportunity. For all those curious people, who yearn to be able to know what is beyond our sky. Endless worlds and opportunities that are waiting to be discovered and we are here to make that a reality.</p>
                <div className='social'>
                    <FaInstagram size={30} style={{color: '#fff', marginRight:'1rem'}}/>
                    <FaLinkedin size={30} style={{color: '#fff', marginRight:'1rem'}}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer