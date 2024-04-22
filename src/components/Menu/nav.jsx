import { useState } from "react";
import Li  from "react-router-dom";
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

    linkOneDropDown,
    linkTwoDropDown,
    linkThreeDropDown,
    linkFourDropDown,
    linkFiveDropDown,
    linkOneDD,
    linkTwoDD,
    linkThreeDD,
    linkFourDD,
    linkFiveDD,

    colors,
    textdecoration,

    iconCenter
}) {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const navStyles = {
        background: "white",
        position:"relative",
    };
    const links = {
        cursor:"pointer",
        position:"relative",
        top:"-25px",
        display: window.innerWidth <= 500 ? "none" : "flex",
        justifyContent:"space-evenly",
        width:"100%",
    }
    const link = {
        color: colors,
        textDecoration:textdecoration
    }
    const dropCell = {
        display:window.innerWidth <= 700 ? "block" : "none",
        background: "white",
        height: "100%",
        width: window.innerWidth <= 700 ? "100%" : "40%",
        position: "fixed",
        right: showDropdown ? "0" : "-100%", // Usa a propriedade transform para mostrar ou ocultar o menu dropdown
        zIndex: "1",
        textAlign:"center",
        transition:"0.5s ease"
    };
    return (
        <nav style={navStyles} className={classeNav}>
            <div style={dropCell}>
                <svg onClick={toggleDropdown} style={{position:"absolute", top:"10px",left:"90%"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg>
                <h1>Coffee</h1>
            <div className={classLinks} style={{display:"flex", flexDirection:"column"}}>
            <hr style={{display: linkOneDropDown ? "block" : "none" ,background:"black", width:"100%"}} />
                <span style={{cursor:"pointer",position:"relative", textAlign:"start", padding:"30px"}} ><a style={{textDecoration:textdecoration, color:colors}} href={linkOneDD}>{linkOneDropDown}</a></span>
                <hr style={{display: linkOneDropDown ? "block" : "none" ,background:"black", width:"100%"}} />
                <span style={{cursor:"pointer",position:"relative", textAlign:"start", padding:"30px"}} ><a style={{textDecoration:textdecoration, color:colors}} href={linkTwoDD}>{linkTwoDropDown}</a></span>
                <hr style={{display: linkTwoDropDown ? "block" : "none" ,background:"black", width:"100%"}} />
                <span style={{cursor:"pointer",position:"relative", textAlign:"start", padding:"30px"}} ><a style={{textDecoration:textdecoration, color:colors}} href={linkThreeDD}>{linkThreeDropDown}</a></span>
                <hr style={{display: linkThreeDropDown ? "block" : "none" ,background:"black", width:"100%"}} />
                <span style={{cursor:"pointer",position:"relative", textAlign:"start", padding:"30px"}} ><a style={{textDecoration:textdecoration, color:colors}} href={linkFourDD}>{linkFourDropDown}</a></span>
                <hr style={{display: linkFourDropDown ? "block" : "none" ,background:"black", width:"100%"}} />
                <span style={{cursor:"pointer",position:"relative", textAlign:"start", padding:"30px"}} ><a style={{textDecoration:textdecoration, color:colors}} href={linkFiveDD}>{linkFiveDropDown}</a></span>                   
                <hr style={{display: linkFiveDropDown ? "block" : "none" ,background:"black", width:"100%"}} />
            </div>
            </div>

            <img onClick={toggleDropdown} style={{cursor:"pointer",display: window.innerWidth <= 500 ? "block" : "" || iconCenter == "true" ? "block" : "",padding:"1% 0% 0% 5%", margin:"auto"}} className={classIcon} src={icon} alt="" />
            <div style={links}>
                <a style={link} href={linkOnehref}><li>{linkOne}</li></a>
                <a style={link} href={linkTwohref}><li>{linkTwo}</li></a>
                <a style={link} href={linkThreehref}><li>{linkThree}</li></a>
                <a style={link} href={linkFourhref}><li>{linkFour}</li></a>
                <a style={link} href={linkFivehref}><li>{linkFive}</li></a>
            </div>
        </nav>
    );
}
