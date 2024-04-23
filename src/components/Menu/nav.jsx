import { useState, useEffect } from "react";
import { Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar({ 
    icon, 
    classeNav,
    classIcon,
    classLinks,
    linkOne,
    linkTwo,
    linkThree,
    linkFour,
    linkFive,
    linkOnehref,
    linkTwohref,
    linkThreehref,
    linkFourhref,
    linkFivehref,


    colors,
    textdecoration,

    name,
    ...props
}) {
    useEffect(() => {
        window.addEventListener('resize', function() {
            // Esta função será chamada sempre que houver uma alteração no tamanho da tela
        
            // Recupere o novo tamanho da tela
            var novaLargura = window.innerWidth;

           if (novaLargura <= 700) {
                setlinks({
                    cursor:"pointer",
                    position:"relative",
                    top:"-25px",
                    display: "none",
                    justifyContent:"space-evenly",
                    width:"100%",
                })
           }
           else{
            setlinks({
                cursor:"pointer",
                position:"relative",
                top:"-25px",
                display: "flex",
                justifyContent:"space-evenly",
                width:"100%",
            })
           }
        });
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const navStyles = {
        background: "white",
        position:"relative",
    };
    const [links, setlinks] = useState({
        cursor:"pointer",
        position:"relative",
        top:"-25px",
        display: window.innerWidth <= 700 ? "none" : "flex",
        justifyContent:"space-evenly",
        width:"100%",
    })
    const link = {
        color: colors,
        textDecoration:textdecoration
    }
    const liStyle = {
        color: colors,
        textDecoration:textdecoration,
        marginBottom:"50px" 
    }
    const iconStyle = {
        cursor:"pointer",
        padding:"1% 0% 0% 5%", 
        margin:"auto"
    }

    return (

<>

        <nav style={navStyles} className={classeNav}>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={{
            display:"flex",
            alignItems:"start",
            flexDirection:"column"
        }} closeButton>
        <a 
        style={{
            display:"block",
            margin:"auto"
        }}
        href="/">
        <img style={iconStyle} className={classIcon} src={icon} alt="" />
        </a>
          <Offcanvas.Title>Coff3R</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div>
                <a style={liStyle} href={linkOnehref}><li className={classLinks} style={liStyle}>{linkOne}</li></a>
                <a style={liStyle} href={linkTwohref}><li className={classLinks} style={liStyle}>{linkTwo}</li></a>
                <a style={liStyle} href={linkThreehref}><li className={classLinks} style={liStyle}>{linkThree}</li></a>
                <a style={liStyle} href={linkFourhref}><li className={classLinks} style={liStyle}>{linkFour}</li></a>
                <a style={liStyle} href={linkFivehref}><li className={classLinks} style={liStyle}>{linkFive}</li></a>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
      <a href={window.innerWidth <= 700 ? null : "/"}>
        <img onClick={() => window.innerWidth <= 700 ? handleShow() : null} style={iconStyle} className={classIcon} src={icon} alt="photo" />          
      </a>
            <div style={links}>
                <a style={link} href={linkOnehref}><li className={classLinks}>{linkOne}</li></a>
                <a style={link} href={linkTwohref}><li className={classLinks}>{linkTwo}</li></a>
                <a style={link} href={linkThreehref}><li className={classLinks}>{linkThree}</li></a>
                <a style={link} href={linkFourhref}><li className={classLinks}>{linkFour}</li></a>
                <a style={link} href={linkFivehref}><li className={classLinks}>{linkFive}</li></a>
            </div>
        </nav>
</>
    );
}
