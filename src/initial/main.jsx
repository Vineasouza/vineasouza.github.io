import React, {useState} from 'react';
import { InlineIcon } from '@iconify/react';
import codeSlash from '@iconify/icons-bi/code-slash';
import foldDown from '@iconify/icons-codicon/fold-down';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './styles.css';

// npm install --save-dev @iconify/react @iconify-icons/ant-design
import { Icon } from '@iconify/react';
import menuOutlined from '@iconify-icons/ant-design/menu-outlined';
import closeCircleOutlined from '@iconify-icons/ant-design/close-circle-outlined';


export default function Main() {    

    const [menuIcon, setMenuIcon] = useState(false);

    function handleClickMenu() {
        if(menuIcon === true) {
            setMenuIcon(false)
        } else {
            setMenuIcon(true)
        }
    }

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
                <div className="navBarIcon" onClick={handleClickMenu}>
                    { menuIcon ? <Icon icon={closeCircleOutlined} /> : <Icon icon={menuOutlined} />}
                    { menuIcon && (
                        <Zoom>
                            <div className="navBarIconContainer">
                                <a className="textNavBarIcon" href="#home">Home</a>
                                <a className="textNavBarIcon" href="#sobremim">Sobre Mim</a>
                                <a className="textNavBarIcon" href="#portifolio">Portifólio</a>
                                <a className="textNavBarIcon" href="#contato">Contato</a>
                            </div>
                        </Zoom>
                    )}
                    
                </div>
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
            <div className="arrow bounce" >
                <a href="#sobremim" >
                <InlineIcon icon={foldDown} height={24} />
                </a>
            </div>
            
        </div>
    )
}
