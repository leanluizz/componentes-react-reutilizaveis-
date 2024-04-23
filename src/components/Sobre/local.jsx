import { useState, useEffect } from "react"

export default function Local ({Border, Background,classBox, classEndereco,classFrase,Frase, Color,Font,img, Width, rua, n, bairro, cidade, estado, pais}){
    useEffect(() => {
        window.addEventListener('resize', function() {
            // Esta função será chamada sempre que houver uma alteração no tamanho da tela
        
            // Recupere o novo tamanho da tela
            var novaLargura = window.innerWidth;
           if (novaLargura <= 1200) {
                setimage({
                    width: Width || "100%",
                    height:Width || ""
                })
                setbackground({
                    display: "flex",
                    flexDirection: "column" ,
                    background:Background,
                    border:Border,
                    color:Color,
                    fontFamily:Font
                })
           }
           else{
            setimage({
                width: Width || "50%",
                height:Width || ""
            })

            setbackground({
                display: "flex",
                flexDirection: "row" ,
                background:Background,
                border:Border,
                color:Color,
                fontFamily:Font
            })
           }
        });
    }, [])
    
    const [image, setimage] = useState( {
        width:Width || window.innerWidth <= 1200 ? "100%" : "50%",
        height:Width || ""
    })
    const [background, setbackground] = useState({
        display: "flex",
        flexDirection: window.innerWidth <= 1200 ?"column" : "row",
        background:Background,
        border:Border,
        color:Color,
        fontFamily:Font
    })
    return(
        <div className={classBox} style={background}>
            <img style={image} src={img} alt="photo" />
            <div style={{margin:"auto", width: window.innerWidth <= 1200 ? "90%" : "25%"}}>
            <div>
                <h2 className={classFrase}>
                    {Frase}
                </h2>
            </div>
            <div>
            <h3 className={classEndereco}>Endereço: {pais} {estado} {cidade} {bairro} {rua} {n}</h3>
            </div>
            </div>
        </div>
    )
}