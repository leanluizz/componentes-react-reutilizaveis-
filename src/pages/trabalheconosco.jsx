//Components
import Nav from '../components/Menu/nav';
import Carousel from '../components/Trabalhe-conosco/carousel';

//Images
import Icon from '../image/Nav/icon-menu.png';
import imgOne from '../image/Trabalhe-conosco/pexels-mizunokozuki-13737041.jpg';
import imgTwo from '../image/Trabalhe-conosco/pexels-pavel-danilyuk-6612597.jpg';
import imgThree from '../image/Trabalhe-conosco/pexels-quang-nguyen-vinh-222549-2159153.jpg';
import Bear from '../image/Trabalhe-conosco/little bear dri 4e58dae8-5daa-4dd4-b3f3-08c64719a5e8.png';
import { useEffect, useState } from 'react';

export default function TrabalheConosco (){
    const [display, setdisplay] = useState('d-none')
    const [displayText, setdisplayText] = useState('d-none')

    useEffect(() => {
        setTimeout(() => {
            setdisplay('d-lg-flex')
        }, 1500);
        setTimeout(() => {
            setdisplayText('')
        }, 3500);
    }, []);
    
    
    return (
        <>
        <Nav 
        classLinks={"animate__animated animate__jello nav"}
        classIcon={"animate__animated animate__jello"}
        icon={Icon}
        linkFour={"Sobre nós"}
        linkFourhref={"/Sobre"}
        linkFive={"Trabalhe Conosco"}
        linkFivehref={"/Trabalhe-Conosco"}
        colors={"black"}
        textdecoration={"none"}
        TitleIcon={"Coffe3R"}
        />
        <div id='box' className={`${display}  ${window.innerWidth < 1000 ? '' : 'animate__animated'} animate__bounceInUp justify-content-between m-lg-5`}>
            <div className={`vw-100 text-light text-center p-5`}>
                <h2 className={` animate__animated animate__backInLeft p-3`}>Você deve estar se perguntando...</h2>
                <h2 className={`animate__delay-1s	1s  animate__animated animate__backInLeft p-3`}>Quem somos?</h2>
                <h3 className={`animate__delay-2s	2s  animate__animated animate__backInLeft p-3`}>
                    Bem-vindo à nossa cafeteria! Aqui, o aroma do café fresco se mistura com a energia de profissionais criativos. Com Wi-Fi rápido e bebidas excepcionais, transformamos mesas em estações de trabalho produtivas. Junte-se à nossa comunidade de ideias e inspiração. Nossa equipe está pronta para tornar sua experiência impecável. Encontre criatividade em cada xícara e projeto compartilhado. Visite-nos e descubra um espaço onde cada momento é uma oportunidade para colaborar e prosperar.
                </h3>
            </div>
            <div className='vw-100'>
                <img className='img-fluid rounded-3' src={Bear} alt="" />
            </div>
        </div>
        <h1 className='p-5 m-5 animate__animated animate__backInLeft text-light'>"Explore conosco um universo de conhecimento e descobertas no nosso novo site, onde cada página é uma janela para inspiração e aprendizado."</h1>
        <Carousel
        imgOne={imgOne}
        titleOne={"Organização"}
        imgTwo={imgTwo}
        titleTwo={"Tranquilidade"}
        imgThree={imgThree}
        titleThree={"Criatividade"}
        />

        </>
    )
}