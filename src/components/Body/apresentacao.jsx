import { useState } from "react";

export default function Apresentacao(
    { 
        Colors, 
        Animate,
        ImageOne,
        ImageTwo, 
        ImageThree, 
        WidthImg, 
        FontSize,
        Font,
        classTexts
    }) {
        
    const [State , setState] = useState(
        window.innerWidth <= 1000 ? 'none' : 'none'
    )
    const [Top, setTop] = useState(100)
    const [Opacity, setOpacity] = useState(0)
    const gridStyle = {
        position:"relative",
        top: Animate == "true" ? Top : 0,
        display: Animate == "true" ? State : window.innerWidth <= 1000 ? 'flex' : 'grid',
        flexDirection:'column',
        gridTemplateColumns: 'repeat(2, 2fr)',
        gridGap: '20px',
        color:"white",
        padding:"5%",
        textAlign:"center",
        transition:"2s ease-in-out",
        opacity: Animate == "true" ? Opacity : 100
    };
    if( Animate == "true"){
        window.addEventListener('scroll', function() {
            var targetElement = document.getElementById('target');
            var bounding = targetElement.getBoundingClientRect();
            // Verifica se o elemento está na tela
            if (
              bounding.top <= 800) {
                setState(
                    window.innerWidth <= 1000 ? 'flex' : 'grid'
                )
                let interval = setInterval(() => {
                    setOpacity(prevOpacity => {
                        if (prevOpacity < 1) {
                            return prevOpacity + 0.1; // Aumenta a opacidade em 0.1 a cada intervalo
                        } else {
                            clearInterval(interval); // Limpa o intervalo quando a opacidade atinge 1
                            return 1;
                        }
                    });
                }, 500);
                let topInterval = setInterval(() => {
                    setTop(prevTop => {
                        if (prevTop > 0) {
                            return prevTop - 1; // Diminui "top" em 1 a cada intervalo
                        } else {
                            clearInterval(topInterval); // Limpa o intervalo quando "top" atinge 0
                            return 0;
                        }
                    });
                }, 100);
              // Faça o que você quiser quando o elemento estiver na tela
            }
          });
    }
   
    return (
        <div id="target" style={gridStyle}>
            <div style={{overflow:"hidden",}}>
                <img style={{width:WidthImg ,borderRadius:"100%"}} src={ImageOne} alt="photo" />
            </div>
            <div style={{overflow:"hidden",textAlign:"center", position:"relative", top:"25%"}}>
                <p className={classTexts} style={{fontFamily:Font,color:Colors ,wordBreak:"break-word",fontSize:FontSize, fontWeight:"bold"}}>"Bem-vindo à nossa cafeteria, onde cada xícara conta uma história e cada aroma desperta uma memória. Entre como um cliente, saia como um amigo."</p>
            </div>
            <div style={{overflow:"hidden",textAlign:"center", position:"relative", top:"25%"}}>
                <p className={classTexts} style={{fontFamily:Font,color:Colors ,wordBreak:"break-word",fontSize:FontSize, fontWeight:"bold"}}>"Na nossa cafeteria, não são apenas os grãos que são excelentes, mas também a equipe que os prepara. Venha desfrutar de um serviço de excelência acompanhado do melhor café."</p>
            </div>
            <div>
                <img style={{width:WidthImg ,borderRadius:"100%"}} src={ImageTwo} alt="photo" />
            </div>
            <div style={{overflow:"hidden",}}>
            <img style={{width:WidthImg ,borderRadius:"100%"}} src={ImageThree} alt="photo" />
            </div>
            <div style={{overflow:"hidden",textAlign:"center", position:"relative", top:"25%"}}>
            <p className={classTexts} style={{fontFamily:Font,color:Colors ,wordBreak:"break-word",fontSize:FontSize, fontWeight:"bold"}}>"Delicie-se com os mais requintados doces, eleitos como os melhores pelos nossos clientes apreciadores de sabor e qualidade!"</p>
            </div>
        </div>
    );
}
