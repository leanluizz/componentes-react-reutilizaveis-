//Styles
import '../styles/App.css';
import '../styles/Sobre/sobre.css';

//Components
import Text from '../components/Sobre/text';
import Local from '../components/Sobre/local';
import WhatsAppIcon from '../components/WhatsAppIcon/whatsappIcon';
import Footer from '../components/Footer';

//Images
import Icon from '../image/Nav/icon-menu.png';
import Person from '../image/Sobre/pessoa-servindo.png';
import WhatsApp from '../image/Contato/whatsappIcon.png';
import Coffee from '../image/Sobre/coffee.jpg';

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
            classText={"animate__animated animate__pulse"}
            />
            <WhatsAppIcon icon={WhatsApp} Width={"500px"} classeIcon={"animate__animated animate__flip"} />
            </div>
            <Local 
                img={Coffee}
                Background={""}
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