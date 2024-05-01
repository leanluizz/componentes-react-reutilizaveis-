//React
import { useEffect, useState } from 'react';
//Style
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Animates ({img, textOne, textTwo, textThree}){
    const [display, setdisplay] = useState('d-none')

    useEffect(() => {
        setTimeout(() => {
            setdisplay('d-lg-flex')
        }, 1500);
    }, []);
    return (
        <div id='box' className={`${display} pb-5 ${window.innerWidth < 1000 ? '' : 'animate__animated'} animate__bounceInUp justify-content-between m-lg-5`}>
            <div className={`vw-100 text-light text-center p-5`}>
                <h2 className={` animate__animated animate__backInLeft p-2`}>{textOne}</h2>
                <h2 className={`animate__delay-1s	1s  animate__animated animate__backInLeft p-2`}>{textTwo}</h2>
                <h3 className={`animate__delay-2s	2s  animate__animated animate__backInLeft p-2`}>{textThree}</h3>
            </div>
            <div className='vw-100'>
                <img className='img-fluid rounded-3' src={img} alt="photo" />
            </div>
        </div>
    )
}