import { useState, useEffect } from "react"

export default function Contact({Reverse, Background, font,text,img, contact, widthText}){
    useEffect(() => {
        window.addEventListener('resize', function() {
            // Esta função será chamada sempre que houver uma alteração no tamanho da tela
        
            // Recupere o novo tamanho da tela
            var novaLargura = window.innerWidth;
           if (novaLargura <= 700) {
                setbox({
                    display:"",
                    flexDirection:Reverse ? "row-reverse" : "",
                    justifyContent:"space-between",
                    background:Background,
                })
           }
           else{
            setbox({
                display:"flex",
                flexDirection:Reverse ? "row-reverse" : "",
                justifyContent:"space-between",
                background:Background,
            })
           }
        });
    }, [])
    
    const [box, setbox] = useState({
        display: window.innerWidth <= 700 ? "" : "flex",
        flexDirection:Reverse ? "row-reverse" : "",
        justifyContent:"space-between",
        background:Background,
    })
    const boxChildren = {
        marginLeft:"5%",
        display:"flex", 
        alignItems:"center"
        }
    const texto = {
        padding:"20px",
        textAlign:"center",
        width:widthText,
        wordBreak:"break-word",
        fontFamily:font
    }
    const func = {
        position:"relative",
        top:"100px",
        width:"100%"
    }
    return(
        <div style={box}>

            <div style={boxChildren}>
            <img src={contact} alt="" />
            <h1 style={texto}>
                {text}
            </h1>
            </div>

            <div>
                <img style={func} src={img} alt="" />
            </div>
        </div>
    )
}