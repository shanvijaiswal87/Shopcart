import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { CallOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Topbar.scss'

function Topbar() {
  return (
    <div className='topbar'>
        <div className="wrapper">
        <div className='left'>
            <div className="item">
        <CallOutlined/>
        <span>+00123456789</span>
        </div>
        </div>
        <div className='mid'>
            <div className="item">
                <Link className='link'  style={{ marginRight: '15px' }}>Get 50% off on selected items</Link>  | 
                <Link className='link'  style={{ marginLeft: '15px' }}>Shop Now</Link>
                
            </div>
        </div>
        <div className='right'>
            <div className="item">
                <span>Eng</span>
                <KeyboardArrowDownOutlinedIcon/>
                </div>
                <div className='item'>
                <span>Location</span>
                <KeyboardArrowDownOutlinedIcon/>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Topbar
