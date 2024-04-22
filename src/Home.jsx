//Styles
import './styles/App.css';
import './styles/Footer.css';

//Components
import Footer from './components/Footer';
import Nav from './components/Menu/nav';
import Mosaico from './components/Body/mosaico';
import Grid from './components/Body/apresentacao';
import Contact from './components/Body/contact';
import WhatsAppIcon from './components/WhatsAppIcon/whatsappIcon';
import Itens from './components/Body/itens';

//Images
import Icon from './image/Nav/icon-menu.png';
import CoffeeInfo from './image/Mosaico/coffee-info-image.jpg';
import CafeDesenhado from './image/Mosaico/coffee-info-image-two.png';
import CopoCafé from './image/Mosaico/coffee-info-image-three.jpeg';
import SalaCafe from './image/Mosaico/coffee-info-image-four.jpg';
import PeopleCoffee from './image/Grid/people-coffee.jpg';
import DoorCafe from './image/Grid/door-coffee.jpg';
import Bolo from './image/Grid/food-coffee.jpg';
import Funcionarios from './image/Contato/waitress.png';
import WhatsApp from './image/Contato/whatsappIcon.png';
import CoffeeSimple from './image/Itens/cofee-simple.jpg';
import Cake from './image/Itens/cake.jpg';
import CakeFruit from './image/Itens/cakefruit.jpg';
import Capuccino from './image/Itens/capuccino-price.jpg';
import Chococake from './image/Itens/chococake.jpg';
import CofeeChoco from './image/Itens/coffee-choco.jpg';
//Animate
import "animate.css";

export default function Router (){
  return (
    <div className="App">
      <WhatsAppIcon icon={WhatsApp} Width={"500px"} classeIcon={"animate__animated animate__flip"} />
<Nav 
classLinks={"nav"}
icon={Icon}
linkFour={"Sobre nós"}
linkFourhref={"/Sobre"}
linkFive={"Trabalhe Conosco"}
linkOneDropDown={"Sobre nós"}
linkOneDD={"/Sobre"}
linkTwoDropDown={"Trabalhe conosco"}
linkTwoDD={"/Trabalhe-Conosco"}
colors={"black"}
textdecoration={"none"}
/>
<Mosaico
classOne={"animate__slower	1s animate__animated animate__flipInY"}
classTwo={"animate__slower	1s animate__animated animate__flipInY"}
classThree={"animate__slower	1s animate__animated animate__flipInY"}
classFour={"animate__slower	1s animate__animated animate__flipInY"}
ImageOne={CoffeeInfo}
ImageTwo={CafeDesenhado}
ImageThree={CopoCafé}
ImageFour={SalaCafe}
/>
<Grid
ImageOne={DoorCafe}
ImageTwo={PeopleCoffee}
ImageThree={Bolo}
WidthImg={"80%"}
FontSize={"2.5vw"}
Animate={"true"}
/>
<Contact
img={Funcionarios}
contact={WhatsApp}
text={"Estamos a apenas uma mensagem de distância no WhatsApp! Faça seu pedido ou tire suas dúvidas agora mesmo."}
font={"Coffee"}
/>
<Itens
text={"Aluguns doces e cafés do nosso cardápio . . ."}
font={"Coffee"}
Color={"white"}
imgOne={CoffeeSimple}
textOneFirst={"Café Simples"}
textOneSecond={"R$12,00"}
imgTwo={Capuccino}
textTwoFirst={"Capuccino"}
textTwoSecond={"R$15,00"}
imgThree={Cake}
textThreeFirst={"Little Cake"}
textThreeSecond={"R$10,00"}
imgFour={CakeFruit}
textFourFirst={"Cake"}
textFourSecond={"R$20,00"}
imgFive={CofeeChoco}
textFiveFirst={"Chocolate ao leite"}
textFiveSecond={"R$12,00"}
imgSix={Chococake}
textSixFirst={"ChocoCake"}
textSixSecond={"R$14,00"}
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

}