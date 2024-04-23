import { useEffect, useState } from "react";

export default function Quadro ({
    Colors,
    text,
    classtext,
     img,
     classimg,
      imgOne,
       imgTwo,
        classBox,
        classboximgs,
        classimgs,
        linkOne,
        linkTwo,
        Widthimgs,
        Target
    }){
        useEffect(() => {
        window.addEventListener('resize', function() {
            // Esta função será chamada sempre que houver uma alteração no tamanho da tela
        
            // Recupere o novo tamanho da tela
            var novaLargura = window.innerWidth;

           if (novaLargura <= 1000) {
                setbox({
                    display:"",
                    alignItems:"center"
                })
           }
           else{
            setbox({
                display:"flex",
                alignItems:"center"
            })
           }
        });
    }, [])
        const [box, setbox] = useState({
            display: window.innerWidth <= 1000 ? "" : "flex",
            alignItems:"center"
        })
        const sideImg = {
            width:"100%"
        }
        const Text = {
            color:Colors || "white",
            margin:"auto",
            padding:"5%"
        }
        const boximgs = {
            display:"inline-block",
            margin:"auto",
            paddingBottom:"5%",
            textAlign:"center"
        }
        const imgs = {
            borderRadius:"100%",
            padding:"10px",
            width:Widthimgs || "25%"
        }
    return (
        <div style={box} className={classBox}>
        <img style={sideImg} className={classimg} src={img} alt="photo" />
        <div>
        <h3 style={Text} className={classtext}>{text}</h3>
        <div style={boximgs} className={classboximgs}>
        <a target={Target} href={linkOne}><img style={imgs} className={classimgs} src={imgOne} alt="appFood" /></a>
        <a target={Target} href={linkTwo}><img style={imgs} className={classimgs} src={imgTwo} alt="appFood" /></a>
        </div>
        </div>
        </div>
    )
}