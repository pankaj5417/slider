import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Draggable from 'react-draggable';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../data';
const useStyle=makeStyles({
    image:{
        width:"100%",
        height:280,

    }
})
export default function Banner() {
    const classes=useStyle()
  return (
    <Carousel
    autoPlay={true}
    animation='slide'
    indicators={false}
    navButtonsAlwaysVisible={true}
    cycleNavigation={true}
    navButtonsProps={{
        style:{
            background:"#FFFFFF",
            color:"#494949",
            borderRadius:3,
            width:50,
            height:100

        }
    }}
    >
      <Draggable>
    {
        bannerData.map( image =>
            <img className={classes.image } src={image} alt="" /> )
    }
        
        </Draggable>     
   </Carousel>
  )
}
