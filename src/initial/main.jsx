import React from 'react';
import { InlineIcon } from '@iconify/react';
import codeSlash from '@iconify/icons-bi/code-slash';
import './styles.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function main() {    
    return (
        <div className="container" id="home">

            <div className="leftContainer">
                <Zoom>
                    <div className="textLogoContainer">
                        <h1>Vinicius</h1>
                    </div>
                </Zoom>
            </div>

            <div className="rightContainer">
                <Fade top>
                    <div className="navBar">
                        <a className="textNavBar" href="#home">Home</a>
                        <a className="textNavBar" href="#sobremim">Sobre Mim</a>
                        <a className="textNavBar" href="#portifolio">Portifólio</a>
                        <a className="textNavBar" href="#contato">Contato</a>
                    </div>
                </Fade>
                <Zoom>
                    <div className="textLogoContainer">
                        <h1>Souza</h1>
                    </div>
                </Zoom>
                {/* <div className="logoContainer">
                    <InlineIcon icon={codeSlash} height={100} />
                </div> */}
            </div>            
            
            <div className="logoContainer">
                <InlineIcon icon={codeSlash} height={100} />
            </div>
            
        </div>
    )
}
