import React from 'react';
import { InlineIcon } from '@iconify/react';
import codeSlash from '@iconify/icons-bi/code-slash';
import foldDown from '@iconify/icons-codicon/fold-down';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './styles.css';

export default function Main() {    

    return (
        <div className="container" id="home">

            <div className="leftContainerInitial">
                <Zoom>
                    <div className="textLogoContainer">
                        <h1>Vinicius</h1>
                    </div>
                </Zoom>
            </div>

            <div className="rightContainerInitial">
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
            </div>            
            
            <div className="logoContainer">
                <InlineIcon icon={codeSlash} height={(window.innerWidth)/12} />
            </div>
            <div className="arrow bounce" onClick={() => window.scrollTo({top: 650, behavior: 'smooth'})}>
                <InlineIcon icon={foldDown} height={24} />
            </div>
            
        </div>
    )
}
