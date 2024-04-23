export default function animateimg({img, Background}){
    const box = {
        background:Background,
        marginTop:"100px"
    }
    return(
        <div style={box}>
            <div>
            <img src={img} alt="" />
            </div>
            <div>
                <h3>
                    Aberto das 08h as 18h
                </h3>
            </div>
        </div>
    )
}