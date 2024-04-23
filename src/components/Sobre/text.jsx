export default function Text ({Title,Texts,Size,Repeat,Background,Color,font, icon, imgCardDown, classText}){
    const About = {
        background:Background,
        backgroundRepeat:Repeat,
        backgroundSize:Size,
        width:"100%",
        margin:"auto",
        borderRadius:"16px"
    }
    const Text = {
        fontFamily:font,
        color:Color
    }
    const Card = {
        display:"flex", 
        alignItems:"center",
        justifyContent:"center",
        padding:"50px"
    }
    const imgCardDownStyle = {
        width:"25%",
        position:"relative",
        top:"50px",
        left:"-3%"
    }
    return (
        <div style={About}>
            <div style={Card}>
            <a href="/"><img src={icon} alt="icon" /></a>
            <h1 style={{color:Color}}>{Title}</h1>
            </div>
            <h1 className={classText} style={Text}>
             {Texts}
            </h1>
            <img style={imgCardDownStyle} src={imgCardDown} alt="" />
        </div>
    )
}