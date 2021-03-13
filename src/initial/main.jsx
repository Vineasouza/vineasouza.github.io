import React from 'react'
import { InlineIcon } from '@iconify/react';
import codeSlash from '@iconify/icons-bi/code-slash';
import './styles.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function main() {
    return (
        <div className="container">

            <div className="leftContainer">
                <Zoom>
                    <div className="textLeftLogoContainer">
                        <h1>Vinicius</h1>
                    </div>
                </Zoom>
            </div>

            <div className="rightContainer">
                <Fade top>
                    <div className="navBar">
                        <p className="textNavBar">Home</p>
                        <p className="textNavBar">Sobre Mim</p>
                        <p className="textNavBar">Portifólio</p>
                        <p className="textNavBar">Contato</p>
                    </div>
                </Fade>
                <Zoom>
                    <div className="textRightLogoContainer">
                        <h1>Souza</h1>
                    </div>
                </Zoom>
            </div>            
            
            <div className="logoContainer">
                <InlineIcon icon={codeSlash} height={100} />
            </div>
            
        </div>
    )
}
