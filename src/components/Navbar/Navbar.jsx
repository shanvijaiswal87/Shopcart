import React from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss'


function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
            <div className="items">
          <img src='/assets/icon1.png' alt='logo'/>
          <span className='shop'>Shopcart</span>
          </div>
        <div className="item">
        <span>Categories</span>
          <KeyboardArrowDownOutlinedIcon/>
        </div>
        <div className="item">
          <Link className='link' to='#'>Deals</Link>
        </div>
        <div className="item">
          <Link className='link' to='#'>What's New</Link>
        </div>
        <div className="item">
          <Link className='link' to='#'>Delivery</Link>
        </div>
            </div>
            <div className="mid">
              
                <div className="item">
                <input type="text" placeholder="Search Product" className="input"/>
               <SearchOutlinedIcon/>
               
              </div>
            </div>
            <div className="right">
                <div className="item">
                 <PersonOutlinedIcon/>
                 <span>Account</span>
                </div>
                <div className="item">
                 <AddShoppingCartOutlinedIcon/>
                 <span>Cart</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
