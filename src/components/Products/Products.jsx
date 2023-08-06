import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Card from '../Card/Card'
import './Products.scss'


function Products() {

        const data =[{
                id:1,
                img:"https://rukminim2.flixcart.com/image/832/832/jh0vb0w0/headphone/t/7/6/sony-mdr-zx110-a-original-imaf553gdwgxbetq.jpeg?q=70",
                title:"Wireless Earbuds IXPS",
                price:"",
                desc:"Organic Cotton,fairtrade certified",
                stars:"4",
              
              },
              
              {
                id:2,
                img:"https://rukminim2.flixcart.com/image/612/612/ksw4ccw0/headphone/k/b/8/bassx-dwh01-defy-original-imag6cyqvmhwqces.jpeg?q=70",
                title:"Airpods Max",
                price:"",
                desc:"A perfect balance of high steady audio",
                stars:"",
              
              },
              {
                id:3,
                img:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/r/z/z/x15-pro-runmus-original-imagrycctjx2xnyz.jpeg?q=70",
                title:"Bose-BT Earphones",
                price:"",
                desc:"Table with air purifier,stained black",
                stars:"",
              
              },
              {
                id:4,
                img:"https://rukminim2.flixcart.com/image/400/400/xif0q/headphone/s/z/b/-original-imagznsrnzhtnbv7.jpeg?q=60",
                title:"VIVEFOX Headphones",
                price:"",
                desc:"Wired Stereo Headsets with mic",
                stars:"",
              
              },
              {
                id:5,
                img:"https://rukminim2.flixcart.com/image/612/612/kqe3low0/headphone/s/6/y/racer-2-16-hour-playtime-bluetooth-headset-with-mic-aux-reason-original-imag4fayhgqc2kna.jpeg?q=70",
                title:"JBL TUNE 600BTNC",
                price:"",
                desc:"Premium Bone conduction Open Ear Bluetooth",
                stars:"",
              
              },
              {
                id:6,
                img:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/a/o/t/h02-pro-with-upto-90-hours-playback-ekko-original-imagm2eznjg63r8r.jpeg?q=70",
                title:"TAGRY Bluetooth",
                price:"",
                desc:"256,8 core GPU, 8GB",
                stars:"",
              
              },
              {
                id:7,
                img:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/m/o/r/b-235-wireless-neckband-with-mic-powerful-stereo-sound-quality-original-imagrmmzryjr7rkp.jpeg?q=70",
                title:"MONSTER MNFLEX",
                price:"",
                desc:"flex active noise cancelling",
                stars:"",
              
              },
              {
                id:8,
                img:"https://rukminim2.flixcart.com/image/612/612/kxaq7ww0/headphone/b/s/x/gaming-headphones-with-adjustable-mic-deep-bass-matlek-original-imag9s5kputhy6uj.jpeg?q=70",
                title:"Mpow CH6",
                price:"",
                desc:"Kids Headphones",
                stars:"",
              
              },
              
              ];
              
            
  return (
    <div className='products'>
      <div className="top">
        <div className="left">
        <div className="item">
        <span>Headphone Type</span>
                <KeyboardArrowDownOutlinedIcon/>
        </div>
        <div className="item">
        <span>Price</span>
                <KeyboardArrowDownOutlinedIcon/>
        </div>
        <div className="item">
        <span>Review</span>
                <KeyboardArrowDownOutlinedIcon/>
        </div>
        <div className="item">
        <span>Color</span>
                <KeyboardArrowDownOutlinedIcon/>
        </div>
        <div className="item">
        <span>Material</span>
                <KeyboardArrowDownOutlinedIcon/>
        </div>
        <div className="item">
        <span>Offer</span>
                <KeyboardArrowDownOutlinedIcon/>
        </div>
        <div className="item">
        <span>All Filters</span>
                <TuneOutlinedIcon/>
        </div>
        </div>
        <div className="right">
        <div className="item">
        <span>Sort by</span>
                <KeyboardArrowDownOutlinedIcon/>
        </div>
        </div>
        
        </div>   
       
        <div className="itm">
          Headphones For You!
        
        </div>
      <div className="bottom">

      {
     data?.map(item=>(
       <Card item={item} key={item.id} />
     ))}
      
      </div>
    </div>
  )
}

export default Products
