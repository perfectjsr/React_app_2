import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HomeCarousel = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{width: '100vw', height: '85vh'}} src='https://ntvb.tmsimg.com/assets/p12742479_v_h8_ad.jpg?w=960&h=540' alt='CarouselImage1' text="First slide" />
      <Carousel.Caption>
        <h3 className='MyCarousel'>The Flash</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{width: '100vw', height: '85vh'}} src='https://assets-in.bmscdn.com/discovery-catalog/events/et00358316-fvhnynvwfn-landscape.jpg' alt='CarouselImage2' text="Second slide" />
      <Carousel.Caption>
        <h3 className='MyCarousel'>Meg 2</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{width: '100vw', height: '85vh'}} src='https://ntvb.tmsimg.com/assets/p23905086_v_h8_aa.jpg?w=960&h=540' alt='CarouselImage3' text="Third slide" />
      <Carousel.Caption>
        <h3 className='MyCarousel'>Heart of Stone</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default HomeCarousel
