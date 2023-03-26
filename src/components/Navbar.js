import React,{useState, useTransition} from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes, FaWindows } from 'react-icons/fa'; //Fabars menu hamburguesa FaT es la X
import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }

    const [color,setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)




  return (
<div className={color ? 'header header-bg' : 'header'}>
       <Link to='/'><h1>AK TRVL</h1></Link> 
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
            <Link to='/training'>Training</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
    </ul>
    <div className='hamburguer' onClick={handleClick}>
    {click ? (<FaTimes size={20}  style={{color:'#ffff'}}/>) : (<FaBars size={20}  style={{color:'#ffff'}}/>)}

       
    </div>
</div>
  )
}

export default Navbar