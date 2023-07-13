import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Components.css';
import { ProductsData } from './Productsdata';
import React from 'react';
import { Product } from './Product';

export const Homepic = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const swipeOptions = {
    draggable: true,
    swipeable: true,
    swipeSpeed: 500,
  };

  const autoSlideOptions = {
    autoplay: true,
    autoPlaySpeed: 3000,
    keyBoardControl: true,
    customTransition: 'all 1s',
    transitionDuration: 1000,
  };

  return (
    <div className='product-container'>
      <div className='prod-container'>
        <Carousel
          responsive={responsive}
          swipeable={swipeOptions.swipeable}
          draggable={swipeOptions.draggable}
          swipeSpeed={swipeOptions.swipeSpeed}
          autoPlay={autoSlideOptions.autoplay}
          autoPlaySpeed={autoSlideOptions.autoPlaySpeed}
          keyBoardControl={autoSlideOptions.keyBoardControl}
          transitionDuration={autoSlideOptions.transitionDuration}
          customTransition={autoSlideOptions.customTransition}
        >
          {ProductsData.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
