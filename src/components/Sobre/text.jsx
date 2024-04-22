export default function Text ({Background,Color,font, icon, imgCardDown, classText}){
    const About = {
        background:Background,
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
        position:"relative",
        top:"50px",
        left:"-3%"
    }
    return (
        <div style={About}>
            <div style={Card}>
            <a href="/"><img src={icon} alt="icon" /></a>
            <h1 style={{color:Color}}>Coffe3R</h1>
            </div>
            <h1 className={classText} style={Text}>
             Bem-vindo ao Coffe3R: O Refúgio Urbano para Amantes do Café! 

Em meio ao pulsar da cidade e à agitação do dia a dia, surge o Coffe3R, um oásis de tranquilidade e sabor no coração da metrópole. Nossa história começa com uma paixão compartilhada por uma xícara perfeita de café, um desejo de criar um espaço onde todos pudessem se reunir, relaxar e desfrutar da arte do café.

Fundado por um grupo de amigos apaixonados pela cultura do café, o Coffe3R nasceu do sonho de oferecer uma experiência autêntica e acolhedora a todos os amantes da bebida mais amada do mundo. Desde o momento em que abrimos nossas portas, nos dedicamos a proporcionar momentos especiais e memórias inesquecíveis a cada cliente que entra em nossa cafeteria.

No Coffe3R, a excelência é a nossa prioridade. Selecionamos cuidadosamente os melhores grãos de café de origem única, torrados com maestria para realçar seus aromas e sabores únicos. Nossos baristas experientes transformam esses grãos em verdadeiras obras de arte líquidas, desde o clássico espresso italiano até os mais indulgentes lattes e cappuccinos.

Além do café de qualidade, oferecemos uma variedade de delícias da confeitaria, preparadas diariamente por nossos talentosos confeiteiros. De croissants recém-assados a bolos irresistíveis, cada mordida é uma celebração de sabor e textura.

No Coffe3R, nossa missão vai além de simplesmente servir café e doces. Somos um espaço de encontro, de conexão e de inspiração. Organizamos eventos especiais, como degustações de café e noites de música ao vivo, para reunir nossa comunidade e compartilhar nossa paixão pelo café.

Seja você um apreciador de café ávido ou apenas alguém em busca de um momento de relaxamento, venha nos visitar no Coffe3R. Estamos aqui para recebê-lo com um sorriso caloroso, uma xícara perfeita de café e uma experiência verdadeiramente única. 
            </h1>
            <img style={imgCardDownStyle} src={imgCardDown} alt="" />
        </div>
    )
}