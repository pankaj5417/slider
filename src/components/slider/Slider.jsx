import { makeStyles } from '@mui/styles';

import Carousel from 'react-multi-carousel';

import { bannerData } from '../../data';
const useStyle=makeStyles({
    image:{
        width:"200px",
        height:280,

    }
})

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export const  Banner=()=> {
    const classes=useStyle()


  return (
    <>
    
    <Carousel
    responsive={responsive} 
    infinite={true}
    draggable={true}
    swipeable={false}
    centerMode={true}
    autoPlay={true}
    autoPlaySpeed={10000}
    keyBoardControl={true}
    containerClass="carousel-container"
    removeArrowOnDeviceType={['tablet','mobile']}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    // navButtonsProps={{
    //     style:{
    //         background:"#FFFFFF",
    //         color:"#494949",
    //         borderRadius:3,
    //         width:50,
    //         height:100

    //     }
    // }}
    >
     
    {
        bannerData.map( (image,index) =>
            <img key={index} className={classes.image } src={image} style={{width:24}} alt="" /> )
    }
    
   </Carousel>
   </>
  )
}
