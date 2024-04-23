export default function Contact({Reverse, Background, font,text,img, contact, widthText}){
    const box ={
        display:window.innerWidth < 700 ? "" : "flex",
        flexDirection:Reverse ? "row-reverse" : "",
        justifyContent:"space-between",
        background:Background,
    }
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