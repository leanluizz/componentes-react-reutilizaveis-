//Styles
import '../styles/App.css';
import '../styles/Sobre/sobre.css';

//Components
import Text from '../components/Sobre/text';
import Local from '../components/Sobre/local';
import WhatsAppIcon from '../components/WhatsAppIcon/whatsappIcon';
import Footer from '../components/Footer';
import AnimateImg from '../components/Sobre/animateImage';

//Images
import Icon from '../image/Nav/icon-menu.png';
import Person from '../image/Sobre/pessoa-servindo.png';
import WhatsApp from '../image/Contato/whatsappIcon.png';
import Coffee from '../image/Sobre/coffee.jpg';
import Servindo from '../image/Sobre/servindo.png';
import Contact from '../components/Body/TwoItens';

//Animate
import 'animate.css'

const Home = () => {
    return (
        <div>
            <div className='card bg-black'>
            <Text
            Background={"white"}
            icon={Icon}
            Color={"black"}
            font={"Coffee"}
            imgCardDown={Person}
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
            img={Servindo}
            text={"Horário de funcionamento: 08h ás 21h..."}
            font={"Coffee"}
            Background={"#f9f9f9f9"}
            Reverse={"true"}
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