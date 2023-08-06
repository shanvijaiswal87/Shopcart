import React from 'react';
import './Card.scss';
import { useState } from 'react';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
function Cards({item}) {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevState) => !prevState);
  };
  return (
    
    <div className="cards">
      <div className="image">
      <Link className='link' >
      {isFavorite ? 
        <FavoriteIcon
          style={{
            position: 'relative',
            top: '6%',
            left: '90%',
            height: '3vh',
            width: '5vw',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '10px 20px',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '15px',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={handleFavoriteClick}
        />
       : 
        <FavoriteOutlinedIcon
          style={{
            position: 'absolute',
            top: '6%',
            left: '90%',
            height: '3vh',
            width: '5vw',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '10px 20px',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '15px',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={handleFavoriteClick}
        />
        }
            
        <img src={item.img} alt="" className="mainImg" />
    
       </Link >
        </div>
        <div className="left">
        <h2>{item.title}</h2>
        <h3><span>$</span>300</h3>
        </div>
        <div className="right">
        
        <div className='description'><span>{item.desc}</span></div>
        <div className="rating"></div>
        </div>
        <Button className='btn'>Add to Cart</Button>

        
       
      </div>
     
  )
}

export default Cards
// to={`/product/${item.id}`}