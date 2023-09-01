import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HomeCarousel = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{width: '100vw', height: '85vh'}} src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='CarouselImage1' text="First slide" />
      <Carousel.Caption>
        <h3 className='MyCarousel'>Trending</h3>
        <p className='MyCarousel'>Enlists the top trending movies this weekend.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{width: '100vw', height: '85vh'}} src='https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png' alt='CarouselImage2' text="Second slide" />
      <Carousel.Caption>
        <h3 className='MyCarousel'>Categories</h3>
        <p className='MyCarousel'>The category wise database of movies.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{width: '100vw', height: '85vh'}} src='https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824' alt='CarouselImage3' text="Third slide" />
      <Carousel.Caption>
        <h3 className='MyCarousel'>Top Airing</h3>
        <p className='MyCarousel'>
          Current releases.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default HomeCarousel
