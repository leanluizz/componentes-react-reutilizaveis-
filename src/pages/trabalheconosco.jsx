//React
import { useState } from 'react';

//Components
import Nav from '../components/Menu/nav';
import Carousel from '../components/Trabalhe-conosco/carousel';
import Animates from '../components/Trabalhe-conosco/animates';
import SideToSide from '../components/Trabalhe-conosco/grid-side-to-side';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon/whatsappIcon';
import List from '../components/Trabalhe-conosco/list';

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
import PouringCoffee from '../image/Trabalhe-conosco/pouring_coffee_1d962db8-a435-42b2-a2ab-7fb6cfac1180-removebg-preview.png';
import WhatsApp from '../image/Contato/whatsappIcon.png';
import Health from '../image/Trabalhe-conosco/beneficios/Microsoft-Fluentui-Emoji-3d-Health-Worker-3d-Medium-Light.256.png';
import Market from '../image/Trabalhe-conosco/beneficios/Iconarchive-Essential-Buildings-Market-Stall.256.png';
import Vacations from '../image/Trabalhe-conosco/beneficios/Microsoft-Fluentui-Emoji-3d-Beach-With-Umbrella-3d.256.png';

export default function TrabalheConosco (){
    const [Response , setResponse] = useState('')
    const [Bg, setBg] = useState('')
    const [AnimateOut, setAnimateOut] = useState('')
    function Send (e){
        setResponse('Enviado com sucesso!')
        setBg('bg-success animate__animated animate__flash')
        setTimeout(() => {
            setBg('animate__animated animate__fadeOut')
        }, 4000);
        setTimeout(() => {
            setResponse('')
            setBg('')
        }, 5000);
    }
    return (
        <>
        <WhatsAppIcon icon={WhatsApp} Width={"500px"} classeIcon={"animate__animated animate__flip"} />
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
        backgroundText={'black'}
        Spacing={'0px 0px 100px 0px'}
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
        GridRepeat={'repeat(2, 2fr)'}
        Background={'white'}
        />
        <List 
       img={PouringCoffee}
       title={"Você, psiu! dê uma olhada nas nossas vagas :)"}
       optionOne={'Recepcionista'}
       optionTwo={'Coffeeman'}
       optionThree={'Atendente'}
       svg={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="animate__infinite	infinite animate__animated animate__wobble bi bi-cup-hot-fill" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"/>
       <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"/>
       </svg>}
       />
        <div>
        <form onSubmit={(e) => e.preventDefault()} className='bg-light p-4 m-5'>
        <h1 className='p-5 text-center'>Envie seu currículo para análise</h1>
         <input className='w-25 mx-auto d-block btn btn-dark text-light rounded-1 outline-0' type="file"/>
         <button onClick={Send} className='d-block mx-auto m-3 btn btn-dark'>Enviar</button>
     </form>
     <div className={`${AnimateOut} position-absolute start-50 translate-middle ${Bg} rounded-2 w-50`}>
            <p className={`text-light p-5 text-center`}>{Response}</p>
        </div>
        </div>

       <div>
        <h1 className='text-light d-block mx-auto m-5 p-5'>Benefícios.</h1>
        
        <div className='d-lg-flex align-items justify-content-evenly p-5'>
        <div className='d-flex flex-column align-items-center'>
            <img className='img-fluid' src={Health} alt="photo" />
            <h3 className='text-center w-50 text-light'>Assistência Médica</h3>
            <p className='p-3 text-break text-light'>Nossa empresa valoriza o bem-estar dos nossos colaboradores, oferecendo assistência médica abrangente como um dos muitos benefícios que fornecemos. Estamos comprometidos em garantir que você tenha acesso aos cuidados de saúde de que precisa para se sentir seguro e apoiado em sua jornada conosco.</p>
        </div>
        <div className='d-flex flex-column align-items-center'>
            <img className='img-fluid' src={Market} alt="photo" />
            <h3 className='text-center w-50 text-light'>Vale alimentação</h3>
            <p className='p-3 text-break text-light'>Na nossa empresa, cuidamos do seu bem-estar de todas as maneiras possíveis. Além de oferecermos assistência médica, proporcionamos também o benefício do vale alimentação, garantindo que você tenha acesso a uma alimentação saudável e equilibrada, fortalecendo não só o seu corpo, mas também o seu desempenho no trabalho.</p>
        </div>
        <div className='d-flex flex-column align-items-center'>
            <img className='img-fluid' src={Vacations} alt="photo" />
            <h3 className='text-center w-50 text-light'>Férias remuneradas</h3>
            <p className='p-3 text-break text-light'>Na nossa empresa, reconhecemos a importância do descanso e do rejuvenescimento para a produtividade e o bem-estar dos nossos colaboradores. Por isso, oferecemos o benefício de férias remuneradas, permitindo que você aproveite momentos de descanso e lazer, recarregando suas energias para retornar ao trabalho ainda mais motivado e inspirado.</p>
        </div>
        </div>
       </div>
        <h1 style={{marginTop:"200px"}} className='p-5 text-center text-light fst-italic'>"O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta." - Winston Churchill</h1>
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