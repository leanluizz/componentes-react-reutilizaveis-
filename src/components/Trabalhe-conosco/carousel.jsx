import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample({
    titleOne, titleTwo, titleThree,
    textOne, textTwo, textThree,
    imgOne, imgTwo, imgThree}) {
  return (
    <Carousel variant='mx-auto text-center'>
      <Carousel.Item>
        <img className='img-fluid rounded-5' src={imgOne} alt="photo" />
        <Carousel.Caption>
          <h3 className='bg-dark rounded-3 p-2'>{titleOne}</h3>
          <p className='bg-dark'>{textOne}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid rounded-5' src={imgTwo} alt="photo" />
        <Carousel.Caption>
          <h3 className='bg-dark rounded-3 p-2'>{titleTwo}</h3>
          <p>{textTwo}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid rounded-5' src={imgThree} alt="photo" />
        <Carousel.Caption>
          <h3 className='bg-dark rounded-3 p-2'>{titleThree}</h3>
          <p>{textThree}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;