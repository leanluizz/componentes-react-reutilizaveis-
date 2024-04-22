export default function Itens(
    {
    text, 
    font, 
    Color, 
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
    HeightImg
}){
    const title = {
        fontFamily:font,
        color:Color,
        padding:"5%",
        marginTop:"20%"
    }
    const grid = {
        display: window.innerWidth <= 700 ? "flex" : "grid",
        flexDirection:"column",
        gridTemplateColumns: "repeat(3, 1fr)",
        background:"black",
        textAlign:"center",
        padding:"5%",
        color:Color,
        fontFamily:font
    }
    const img = {
        width:WidthImg,
        height:HeightImg,
        borderRadius:"12px"
    }
    return (
        <div>
            <h1 style={title}>{text}</h1>
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