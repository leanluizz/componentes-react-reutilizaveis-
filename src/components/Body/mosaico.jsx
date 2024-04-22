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
    const DivPai = {
        display:"flex",
        flexDirection: window.innerWidth <= 800 ? "column" : "row",
    }
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