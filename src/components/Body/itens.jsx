import { useState ,useEffect } from "react";
export default function Itens(
    {
    text, 
    font, 
    Color,
    ColorTitle, 
    imgOne,
    textOneFirst,textOneSecond,

    imgTwo, 
    textTwoFirst,textTwoSecond,

    imgThree, 
    textThreeFirst,textThreeSecond,

    imgFour,
    textFourFirst,textFourSecond, 

    imgFive,
    textFiveFirst,textFiveSecond, 

    imgSix,
    textSixFirst,textSixSecond, 

    WidthImg,
    HeightImg,

    classTitle
}){

    useEffect(() => {
        window.addEventListener('resize', function() {
            // Esta função será chamada sempre que houver uma alteração no tamanho da tela
        
            // Recupere o novo tamanho da tela
            var novaLargura = window.innerWidth;
           if (novaLargura <= 1000) {
                setgrid({
                    display:"flex",
                    flexDirection:"column",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    background:"black",
                    textAlign:"center",
                    padding:"5%",
                    color:Color,
                    fontFamily:font
                })
           }
           else{
            setgrid({
                display:"grid",
                flexDirection:"column",
                gridTemplateColumns: "repeat(3, 1fr)",
                background:"black",
                textAlign:"center",
                padding:"5%",
                color:Color,
                fontFamily:font
            })
           }
        });
    }, [])

    const title = {
        fontFamily:font,
        color:ColorTitle,
        padding:"5%",
        margin:100,
    }
    const [grid, setgrid] = useState({
        display: window.innerWidth <= 700 ? "flex" : "grid",
        flexDirection:"column",
        gridTemplateColumns: "repeat(3, 1fr)",
        background:"black",
        textAlign:"center",
        padding:"5%",
        color:Color,
        fontFamily:font
    })
    const img = {
        width:WidthImg,
        height:HeightImg,
        borderRadius:"16px",
        padding:"6%"
    }
    return (
        <div>
            <h1 className={classTitle} style={title}>{text}</h1>
            <div style={grid}>
                    <div>
                    <img style={img} src={imgOne} alt="" />
                    <h3>{textOneFirst}</h3>
                    <h2>{textOneSecond}</h2>
                    </div>
                    <div>
                    <img style={img} src={imgTwo} alt="" />
                    <h3>{textTwoFirst}</h3>
                    <h2>{textTwoSecond}</h2>
                    </div>
                    <div>
                    <img style={img} src={imgThree} alt="" />
                    <h3>{textThreeFirst}</h3>
                    <h2>{textThreeSecond}</h2>
                    </div>
                    <div>
                    <img style={img} src={imgFour} alt="" />
                    <h3>{textFourFirst}</h3>
                    <h2>{textFourSecond}</h2>
                    </div>
                    <div>
                    <img style={img} src={imgFive} alt="" />
                    <h3>{textFiveFirst}</h3>
                    <h2>{textFiveSecond}</h2>
                    </div>
                    <div>
                    <img style={img} src={imgSix} alt="" />
                    <h3>{textSixFirst}</h3>
                    <h2>{textSixSecond}</h2>
                    </div>
            </div>
        </div>
    )
}