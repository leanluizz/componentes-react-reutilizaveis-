//Components
import Nav from '../components/Menu/nav';
import Carousel from '../components/Trabalhe-conosco/carousel';
import Animates from '../components/Trabalhe-conosco/animates';
import SideToSide from '../components/Trabalhe-conosco/grid-side-to-side';
import Footer from '../components/Footer';

//Images
import Icon from '../image/Nav/icon-menu.png';
import imgOne from '../image/Trabalhe-conosco/pexels-mizunokozuki-13737041.jpg';
import imgTwo from '../image/Trabalhe-conosco/pexels-pavel-danilyuk-6612597.jpg';
import imgThree from '../image/Trabalhe-conosco/pexels-quang-nguyen-vinh-222549-2159153.jpg';
import Bear from '../image/Trabalhe-conosco/little bear dri 4e58dae8-5daa-4dd4-b3f3-08c64719a5e8.png';
import Diversidade from '../image/Trabalhe-conosco/grid-side-to-side/Design_sem_nome__1_-removebg-preview.png';
import Abertura from '../image/Trabalhe-conosco/grid-side-to-side/Design_sem_nome__2_-removebg-preview.png';
import Criatividade from '../image/Trabalhe-conosco/grid-side-to-side/Design_sem_nome-removebg-preview.png';
import Descanso from '../image/Trabalhe-conosco/grid-side-to-side/descanso.png';

export default function TrabalheConosco (){
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
        <Animates
        img={Bear}
        textOne={'Você deve estar se perguntando...'}
        textTwo={'Quem somos?'}
        textThree={' Bem-vindo à nossa cafeteria! Aqui, o aroma do café fresco se mistura com a energia de profissionais criativos. Com Wi-Fi rápido e bebidas excepcionais, transformamos mesas em estações de trabalho produtivas. Junte-se à nossa comunidade de ideias e inspiração. Nossa equipe está pronta para tornar sua experiência impecável. Encontre criatividade em cada xícara e projeto compartilhado. Visite-nos e descubra um espaço onde cada momento é uma oportunidade para colaborar e prosperar.'}
        />
        <h1 className='p-1 m-5 animate__animated animate__backInLeft text-light'>"Explore conosco um universo de conhecimento e descobertas no nosso novo site, onde cada página é uma janela para inspiração e aprendizado."</h1>
        <Carousel
        imgOne={imgOne}
        titleOne={"Organização"}
        imgTwo={imgTwo}
        titleTwo={"Tranquilidade"}
        imgThree={imgThree}
        titleThree={"Criatividade"}
        />
        <SideToSide
        img={Diversidade}
        titleOne={'Em nossa cafeteria, a diversidade não apenas é celebrada, mas também é a essência que enriquece nossas conversas e experiências compartilhadas.'}
        imgOne={Criatividade}
        titleTwo={'Na cafeteria, a criatividade se torna uma aliada no trabalho, fluindo em cada xícara de café e se refletindo nas ideias que nascem em meio às conversas e colaborações.'}
        imgTwo={Abertura}
        titleThree={'Na cafeteria, cultivamos um ambiente saudável, onde o bem-estar é tão importante quanto a produtividade, oferecendo opções de alimentos nutritivos e uma atmosfera acolhedora que promove o equilíbrio entre corpo e mente.'}
        imgThree={Descanso}
        titleFour={'Na nossa cafeteria, valorizamos horários de descanso flexíveis, reconhecendo que cada pessoa tem ritmos e necessidades diferentes. Criamos um ambiente onde você pode recarregar suas energias quando necessário, permitindo que você volte ao trabalho revigorado e inspirado.'}
        Colors={'black'}
        Top={'200px'}
        GridRepeat={'repeat(2, 2fr)'}
        Background={'white'}
        />
        <Footer
        linkedin={"https://www.linkedin.com/in/leandro-luiz-a022131bb/"}
        github={"https://github.com/leanluizz"}
        titleOne={"Feito por Leandro Luiz Ribeiro Gomes"}
        titleTwo={"Landing page example"}
        copy={2022}
        Top={"210px"}
        />
        </>
    )
}