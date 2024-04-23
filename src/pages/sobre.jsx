//Styles
import '../styles/App.css';
import '../styles/Sobre/sobre.css';

//Components
import Text from '../components/Sobre/text';
import Local from '../components/Sobre/local';
import WhatsAppIcon from '../components/WhatsAppIcon/whatsappIcon';
import Footer from '../components/Footer';
import AnimateImg from '../components/Sobre/animateImage';
import Quadro from '../components/Sobre/quadro-four-inline-blocks';
import Nav from '../components/Menu/nav';

//Images
import Icon from '../image/Nav/icon-menu.png';
import CardBg from '../image/Sobre/card/fundo-carta.avif'
import Person from '../image/Sobre/persons/pessoa-servindo.png';
import WhatsApp from '../image/Contato/whatsappIcon.png';
import Coffee from '../image/Sobre/cafés-doces/coffee.jpg';
import Servindo from '../image/Sobre/persons/servindo.png';
import Contact from '../components/Body/TwoItens';
import LocalOne from '../image/Sobre/local/localOne.jpg';
import Cafeteria from '../image/Sobre/local/Cafeteria.jpg';
import Lazer from '../image/Sobre/local/lazer.jpg';
import Entregador from '../image/Sobre/gifs/moto.gif';
import ifood from '../image/Sobre/apps/ifood.png';
import aiqfome from '../image/Sobre/apps/aiqfome.png';

//Animate
import 'animate.css'

const Home = () => {
    return (
        <div>
             <Nav 
            classLinks={"animate__animated animate__jello nav"}
            classIcon={"animate__animated animate__jello"}
            icon={Icon}
            linkFour={"Sobre nós"}
            linkFourhref={"/Sobre"}
            linkFive={"Trabalhe Conosco"}
            colors={"black"}
            textdecoration={"none"}
            name={"CLick"}
            />
            <div className='card bg-black'>
            <AnimateImg 
            defaultKey={"Portaria"}
            titleOne={"Portaria"}
            titleTwo={"Cafeteria"}
            titleThree={"Lazer"}
            imgOne={LocalOne}
            imgTwo={Cafeteria}
            imgThree={Lazer}
            />
            <WhatsAppIcon icon={WhatsApp} Width={"500px"} classeIcon={"animate__animated animate__flip"} />
            </div>
            <Local 
                img={Coffee}
                Border={"2px solid white"}
                Color={"white"}
                Font={"Arial"}
                Frase={'"Desperte seus sentidos em nossa cafeteria, onde cada aroma, cada sabor, é uma jornada para os paladares mais exigentes. Estamos localizados no coração da cidade, prontos para receber você em nossa atmosfera acolhedora".'}
                classFrase={"fst-italic"}
                pais={"País -"}
                estado={"Estado -"}
                cidade={"Cidade -"}
                bairro={"Bairro -"}
                rua={"rua -"}
                n={"n"}
            />

            <Contact 
            text={"Horário de funcionamento: 08h ás 21h..."}
            font={"Coffee"}
            Background={"#f9f9f9f9"}
            Reverse={"true"}
            />
           <Quadro
           text={"Entregamos em todo país e você pode também pode nos encontrar no seu IFood ou AiQFome"}
           img={Entregador} 
           imgOne={ifood}
           imgTwo={aiqfome}
           linkOne={"https://www.ifood.com.br/"}
           linkTwo={"https://aiqfome.com/"}
           Target={"_blank"}
           />
            <Text
            Background={`url(${CardBg})`}
            icon={Icon}
            Color={"black"}
            font={"Coffee"}
            imgCardDown={Person}
            classText={"text"}
            Title={"Coffe3R"}
            Texts={`
            Bem-vindo ao Coffe3R: O Refúgio Urbano para Amantes do Café! 

Em meio ao pulsar da cidade e à agitação do dia a dia, surge o Coffe3R, um oásis de tranquilidade e sabor no coração da metrópole. Nossa história começa com uma paixão compartilhada por uma xícara perfeita de café, um desejo de criar um espaço onde todos pudessem se reunir, relaxar e desfrutar da arte do café.

Fundado por um grupo de amigos apaixonados pela cultura do café, o Coffe3R nasceu do sonho de oferecer uma experiência autêntica e acolhedora a todos os amantes da bebida mais amada do mundo. Desde o momento em que abrimos nossas portas, nos dedicamos a proporcionar momentos especiais e memórias inesquecíveis a cada cliente que entra em nossa cafeteria.

No Coffe3R, a excelência é a nossa prioridade. Selecionamos cuidadosamente os melhores grãos de café de origem única, torrados com maestria para realçar seus aromas e sabores únicos. Nossos baristas experientes transformam esses grãos em verdadeiras obras de arte líquidas, desde o clássico espresso italiano até os mais indulgentes lattes e cappuccinos.

Além do café de qualidade, oferecemos uma variedade de delícias da confeitaria, preparadas diariamente por nossos talentosos confeiteiros. De croissants recém-assados a bolos irresistíveis, cada mordida é uma celebração de sabor e textura.

No Coffe3R, nossa missão vai além de simplesmente servir café e doces. Somos um espaço de encontro, de conexão e de inspiração. Organizamos eventos especiais, como degustações de café e noites de música ao vivo, para reunir nossa comunidade e compartilhar nossa paixão pelo café.

Seja você um apreciador de café ávido ou apenas alguém em busca de um momento de relaxamento, venha nos visitar no Coffe3R. Estamos aqui para recebê-lo com um sorriso caloroso, uma xícara perfeita de café e uma experiência verdadeiramente única. 
            `}
            />
            <Footer
            linkedin={"https://www.linkedin.com/in/leandro-luiz-a022131bb/"}
            github={"https://github.com/leanluizz"}
            titleOne={"Feito por Leandro Luiz Ribeiro Gomes"}
            titleTwo={"Landing page example"}
            copy={2022}
            />
        </div>
);
  };
  
  export default Home;