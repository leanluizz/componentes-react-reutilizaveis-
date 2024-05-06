import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample({
  colors, backgroundText,
    titleOne, titleTwo, titleThree,
    textOne, textTwo, textThree,
    imgOne, imgTwo, imgThree, Spacing}) {
  return (
    <Carousel style={{margin:Spacing}} variant='m-5 text-center'>
      <Carousel.Item>
        <img className='img-fluid rounded-5' src={imgOne} alt="photo" />
        <Carousel.Caption>
          <h3 style={{color:colors, background:backgroundText}} className={`${backgroundText ? backgroundText :  'bg-dark rounded'}-3 p-2`}>{titleOne}</h3>
          <p style={{color:colors, background:backgroundText}} className={`${backgroundText ? backgroundText :  'bg-dark'}`}>{textOne}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid rounded-5' src={imgTwo} alt="photo" />
        <Carousel.Caption>
          <h3 style={{color:colors, background:backgroundText}} className={`${backgroundText ? backgroundText :  'bg-dark rounded'}-3 p-2`}>{titleTwo}</h3>
          <p style={{color:colors, background:backgroundText}} className={`${backgroundText ? backgroundText :  'bg-dark'}`}>{textTwo}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid rounded-5' src={imgThree} alt="photo" />
        <Carousel.Caption>
          <h3 style={{color:colors, background:backgroundText}} className={`${backgroundText ? backgroundText :  'bg-dark rounded'}-3 p-2`}>{titleThree}</h3>
          <p style={{color:colors, background:backgroundText}} className={`${backgroundText ? backgroundText :  'bg-dark'}`}>{textThree}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;