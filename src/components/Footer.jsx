import React from "react";
import "../styles/App.css";
import "../styles/Footer.css";
import Github from "../image/github.png";
import Linkedin from "../image/linkedin.png";

export default function Footer ({
  linkedin,
  github,
  titleOne,
  titleTwo,
  copy
}){
    return(
        <footer>
        <div>
          <a href={github} target="_blank">
            <img src={Github} alt="githublink"  className='github'/>
          </a>
          <a href={linkedin} target="_blank">
            <img src={Linkedin} alt="linkedinlink" className='linkedin' />
          </a>
          <p>{titleOne}</p>
          <p>{titleTwo}</p>
        </div>
        <div id='year'>
          <p>&copy;{copy}</p>
        </div>
         </footer>
    )
}