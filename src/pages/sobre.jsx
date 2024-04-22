//Styles
import '../styles/App.css';
import '../styles/Sobre/sobre.css';

//Components
import Text from '../components/Sobre/text';

//Images
import Icon from '../image/Nav/icon-menu.png';
import Person from '../image/Sobre/pessoa-servindo.png';

//Animate
import 'animate.css'

const Home = () => {
    return (
        <div>
            <div className='card'>
            <Text
            icon={Icon}
            font={"Coffee"}
            imgCardDown={Person}
            classText={"animate__animated animate__pulse"}
            />
            </div>
        </div>
);
  };
  
  export default Home;