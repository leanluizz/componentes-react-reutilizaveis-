import { useState } from "react";
import { Button, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar({ 
    icon, 
    classeNav,
    classIcon,
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


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const navStyles = {
        background: "white",
        position:"relative",
    };
    const links = {
        cursor:"pointer",
        position:"relative",
        top:"-25px",
        display: window.innerWidth <= 700 ? "none" : "flex",
        justifyContent:"space-evenly",
        width:"100%",
    }
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
        <img style={iconStyle} className={classIcon} src={icon} alt="" />
          <Offcanvas.Title>Coff3R</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div>
                <a style={liStyle} href={linkOnehref}><li style={liStyle}>{linkOne}</li></a>
                <a style={liStyle} href={linkTwohref}><li style={liStyle}>{linkTwo}</li></a>
                <a style={liStyle} href={linkThreehref}><li style={liStyle}>{linkThree}</li></a>
                <a style={liStyle} href={linkFourhref}><li style={liStyle}>{linkFour}</li></a>
                <a style={liStyle} href={linkFivehref}><li style={liStyle}>{linkFive}</li></a>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
        <img onClick={() => window.innerWidth <= 700 ? handleShow() : null} style={iconStyle} className={classIcon} src={icon} alt="photo" />
            <div style={links}>
                <a style={link} href={linkOnehref}><li>{linkOne}</li></a>
                <a style={link} href={linkTwohref}><li>{linkTwo}</li></a>
                <a style={link} href={linkThreehref}><li>{linkThree}</li></a>
                <a style={link} href={linkFourhref}><li>{linkFour}</li></a>
                <a style={link} href={linkFivehref}><li>{linkFive}</li></a>
            </div>
        </nav>
</>
    );
}
