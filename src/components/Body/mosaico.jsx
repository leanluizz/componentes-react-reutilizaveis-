import { useState, useEffect } from "react";
export default function Mosaico(
{
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,

    classOne,
    classTwo,
    classThree,
    classFour
}){
    useEffect(() => {
        window.addEventListener('resize', function() {
            // Esta função será chamada sempre que houver uma alteração no tamanho da tela
        
            // Recupere o novo tamanho da tela
            var novaLargura = window.innerWidth;
           if (novaLargura <= 800) {
            setDivPai({
                display:"flex",
                flexDirection:  "column",
            })
           }
           else{
            setDivPai({
                display:"flex",
                flexDirection: "row",
            })
           }
        });
    }, [])
    const [DivPai, setDivPai] = useState({
        display:"flex",
        flexDirection: window.innerWidth <= 800 ? "column" : "row",
    })
    const Img = {
        width: window.innerWidth <= 800 ? "100%" : "25%",
        height:"100vh"
    }
    return(
        <div style={DivPai}>
        <img className={classOne} style={Img} src={ImageOne} alt="photo" />
        <img className={classTwo} style={Img} src={ImageTwo} alt="photo" />
        <img className={classThree} style={Img} src={ImageThree} alt="photo" />
        <img className={classFour} style={Img} src={ImageFour} alt="photo" />
        </div>
    )
}