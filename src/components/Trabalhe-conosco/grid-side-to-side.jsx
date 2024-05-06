//Style
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
export default function SideToSide ({
    Colors,
     img, 
     imgOne, 
     imgTwo,
     imgThree,
     Top,
     titleOne,
     titleTwo,
     titleThree,
     titleFour,
     GridRepeat,
     Background
    }){
    const [display, setdisplay] = useState()
    useEffect(() => {
        window.addEventListener('resize', function() {
            // Esta função será chamada sempre que houver uma alteração no tamanho da tela
        
            // Recupere o novo tamanho da tela
            var novaLargura = window.innerWidth;

           if (novaLargura <= 1000) {
            setdisplay('flex')
           }
           else{
            setdisplay('grid')
           }
        });
    }, [])
    const gridStyle = {
        background :Background,
        backgroundImage: Background,
        position:"relative",
        display: window.innerWidth < 1000 ? 'flex' : 'grid' || display,
        flexDirection:'column',
        gridTemplateColumns: GridRepeat || 'repeat(2, 2fr)',
        gridGap: '20px',
        color:"white",
        padding:"5%",
        textAlign:"center",
        top: Top
    };
    return (
        <div style={gridStyle}>
            <div>
            <img className='img-fluid' src={img} alt="photo" />
            <p style={{color:Colors}}>{titleOne}</p>
            </div>
            <div>
            <img className='img-fluid' src={imgOne} alt="photo" />
            <p style={{color:Colors}}>{titleTwo}</p>
            </div>
            <div>
            <img className='img-fluid' src={imgTwo} alt="photo" />
            <p style={{color:Colors}}>{titleThree}</p>
            </div>
            <div>
            <img className='img-fluid' src={imgThree} alt="photo" />
            <p style={{color:Colors}}>{titleFour}</p>
            </div>
        </div>
    )
}