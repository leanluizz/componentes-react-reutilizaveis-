export default function Local ({Border, Background,classBox, classEndereco,classFrase,Frase, Color,Font,img, Width, rua, n, bairro, cidade, estado, pais}){
    const image = {
        width:Width || window.innerWidth <= 700 ? "100%" : "50%",
        height:Width || ""
    }
    const background = {
        display: "flex",
        flexDirection: window.innerWidth <= 700 ?"column" : "row",
        background:Background,
        border:Border,
        color:Color,
        fontFamily:Font
    }
    return(
        <div className={classBox} style={background}>
            <img style={image} src={img} alt="photo" />
            <div style={{margin:"auto", width: window.innerWidth <= 700 ? "90%" : "25%"}}>
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